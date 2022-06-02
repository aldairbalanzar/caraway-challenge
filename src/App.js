import './App.css';
import { useState } from 'react'
import { ChallengeOne, ChallengeTwo, ChallengeThree } from './components/Challenges'

function App() {
  const [appState, setAppState] = useState(1)

  const handleAppState = (num) => {
    return () => {
      setAppState(num)
    }
  }

  return (
    <div className={`App ${appState !== 1 ? '' : 'app-one'}`}>
      <div className="challenge-btn-container">
        <button className="app-font challenge-btn" onClick={handleAppState(1)}>Challenge 1</button>
        <button className="app-font challenge-btn" onClick={handleAppState(2)}>Challenge 2</button>
        <button className="app-font challenge-btn" onClick={handleAppState(3)}>Challenge 3</button>
      </div>
      {appState === 1 && <ChallengeOne/>} 
      {appState === 2 && <ChallengeTwo/>} 
      {appState === 3 && <ChallengeThree/>} 
    </div>
  );
}

export default App;
