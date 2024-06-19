import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Structure from './layout/Structure/Structure';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Structure />}>
              <Route path="/" element={<HomePage />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
