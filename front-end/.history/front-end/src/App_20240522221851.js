import './reset.scss'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Router path="/" element={HomePage } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
