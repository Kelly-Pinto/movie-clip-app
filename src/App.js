
import './App.css';
import KaraokeVideo from "./KaraokeVideo";
import OriginalVideo from "./OriginalVideo";
import AudioSection from "./AudioSection";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <OriginalVideo/>
      <AudioSection/>
       <KaraokeVideo/>
      </div>
    </div>
  );
}

export default App;
