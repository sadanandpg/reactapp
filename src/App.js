import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="sadanand.com"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="learn-link"
        >
          learing test and dev
        </a>
      </header>
    </div>
  );
}

export default App;
