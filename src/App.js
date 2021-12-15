import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BpmButton from './components/BpmButton';
import DisplayedBPM from './components/DisplayedBPM';
import { useState } from 'react';

function App() {
  
  const [clicks, setClicks] = useState(0)

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false)

  const startTimer = () => {
    if (!isActive){
      setIsActive(true)
      setInterval(() => {
        setSeconds(seconds => seconds + 1)
       }, 1000)
    }
  }

  const incrementClicks = () => {
    setClicks(clicks + 1)
  }

  return (
    <div className="App">
     <Navbar />
     <div className="button-container">
      <h1>{seconds}</h1>
      <button onClick={startTimer}>start</button>
      <DisplayedBPM clicks={clicks} />
      <BpmButton className="main-button" incrementClicks={incrementClicks} />
     </div>
    </div>
  );
}

export default App;
