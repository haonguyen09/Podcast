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

function App() {
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
