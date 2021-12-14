import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BpmButton from './components/BpmButton';
import DisplayedBPM from './components/DisplayedBPM';



function App() {
  return (
    <div className="App">
     <Navbar />
     <BpmButton />
    </div>
  );
}

export default App;
