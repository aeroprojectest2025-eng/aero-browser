import TitleBar from './components/TitleBar/TitleBar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <TitleBar />
      <div className="app-content">
        <h1>Welcome to Tauri!</h1>
        <p>Your content goes here</p>
      </div>
    </div>
  );
}

export default App;