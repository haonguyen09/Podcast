import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Structure from './layout/Structure/Structure';
import HomePage from './pages/HomePage/HomePage';
import TrendingPage from './pages/Trending/TrendingPage';
import ExploreTopic from './pages/ExploreTopics/ExploreTopic';
import PodcastTopic from './pages/ExploreTopics/PodcastTopic';
import PLayListPage from './pages/Playlist/PLayListPage';
import PLayListShow from './pages/Playlist/PLayListShow';
import SubscriptionsPage from './pages/Subscriptions/SubscriptionsPage';
import Episodes from './pages/Episodes/Episodes';
import CreateEpisodes from './pages/Episodes/CreateEpisodes';
import TeamPage from './pages/Team/TeamPage';
import SubcribersPage from './pages/Subcribers/SubcribersPage';
import LeaderboardPage from './pages/Leaderboard/LeaderboardPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import SignUpPage1 from './pages/SignUp/SignUpPage1';
import SignInPage from './pages/SignIn/SignInPage';
import { getDetailsUser } from './services/UserService';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const token = user?.access_token || localStorage.getItem('access_token');
    if (token && validateJWT(token)) {
      const decoded = jwtDecode(token);
      console.log('Decoded JWT:', decoded);
      if (decoded?.id && decoded?.role) {
        handleGetDetailsUser(decoded.id, token, decoded.role);
      } else {
        console.error('JWT does not contain required user ID or role.');
      }
    }
  }, [user]);

  const validateJWT = (token) => {
    return typeof token === 'string' && token.split('.').length === 3;
  };

  useEffect(() => {
    UserService.axiosJWT.interceptors.request.use(async config => {
      const accessToken = user?.access_token || localStorage.getItem('access_token');
      const refreshToken = localStorage.getItem('refresh_token');
      const currentTime = Date.now() / 1000; // Current time in seconds

      if (accessToken && validateJWT(accessToken) && jwtDecode(accessToken).exp < currentTime) {
        if (refreshToken && validateJWT(refreshToken) && jwtDecode(refreshToken).exp > currentTime) {
          const data = await UserService.refreshToken(refreshToken);
          config.headers['token'] = `Bearer ${data?.access_token}`;
        } else {
          dispatch(resetUser());
        }
      }

      return config;
    }, error => Promise.reject(error));
  }, [dispatch, user]);

  const handleGetDetailsUser = async (id, token, role) => {
    try {
      const res = await getDetailsUser(id, token);
      if (res?.data) {
        const { first_name, last_name, email } = res.data;
        dispatch(updateUser({
          first_name,
          last_name,
          email,
          access_token: token,
          refreshToken: localStorage.getItem('refresh_token')
        }));
      } else {
        console.error('No user details were returned from the service.');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Structure />}>
              <Route index element={<HomePage />}/>
              <Route path='/trending' element={<TrendingPage />}/>
              <Route path='/explore-topics' element={<ExploreTopic />}/>
              <Route path='/explore-topics/religion' element={<PodcastTopic />}/>
              <Route path='/playlist' element={<PLayListPage />}/>
              <Route path='/playlist/show' element={<PLayListShow />}/>
              <Route path='/subscriptions' element={<SubscriptionsPage />}/>
              <Route path='/episodes' element={<Episodes />}/>
              <Route path='/episodes/create' element={<CreateEpisodes />}/>
              <Route path='/team' element={<TeamPage />}/>
              <Route path='/subscribers' element={<SubcribersPage />}/>
              <Route path='/leaderboard' element={<LeaderboardPage />}/>
          </Route>
          <Route path='/sign-up' element={<SignUpPage />}/>
          <Route path='/sign-in' element={<SignInPage />}/>
          <Route path='/sign-up-step1' element={<SignUpPage1 />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
