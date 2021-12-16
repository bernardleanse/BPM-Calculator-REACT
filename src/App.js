import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BpmButton from './components/BpmButton';
import DisplayedBPM from './components/DisplayedBPM';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import ResetButton from './components/ResetButton';

function App() {
  
  const [clicks, setClicks] = useState(0)

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false)
  const [bpm, setBpm] = useState(0)
  const [timer, setTimer] = useState(null)

  const startTimer = () => {
    if (!isActive){
      setIsActive(true)
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
       }, 1000)
      setTimer(interval)
    }
  }

  const reset = () => {
    stopTimer()
    setIsActive(false)
    setSeconds(0)
    setClicks(0)
    setBpm(0)
  }

  const stopTimer = () => {
    clearInterval(timer)
  }

  const incrementClicks = () => {
    setClicks(clicks + 1)
  }

  const updateBpmState = () => {
    const minutes = seconds / 60
    const currentBpm = Math.floor(clicks / minutes)
    setBpm(currentBpm) 
  }

  return (
    <div className="App">
     <Navbar />
     <div className="button-container">
      <DisplayedBPM bpm={bpm} />
      <BpmButton className="main-button" updateBpmState={updateBpmState} incrementClicks={incrementClicks} startTimer={startTimer}/>
      <ResetButton reset={reset} />
     </div>
    </div>
  );
}

export default App;
