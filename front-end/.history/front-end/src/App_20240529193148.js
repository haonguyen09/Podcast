import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Structure from './layout/Structure/Structure';
import HomePage from './pages/HomePage/HomePage';
import TrendingPage from './pages/Trending/TrendingPage';
import ExploreTopic from './pages/ExploreTopics/ExploreTopic';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Structure />}>
              <Route index element={<HomePage />}/>
              <Route path='/trending' element={<TrendingPage />}/>
              <Route path='/explore-topics' element={<ExploreTopic />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
