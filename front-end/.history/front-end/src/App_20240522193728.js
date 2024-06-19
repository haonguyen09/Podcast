import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </header>
    </div>
  );
}

export default App;
