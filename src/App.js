import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './Learnings/UseStates/CounterUseState';
import UserProfile from './Learnings/UseStates/UserProfileUseState';
import Counters from './Learnings/UseEffect/UseEffectCounters';
import Timer from './Learnings/UseEffect/Timer';

function App() {
  return (
    <Router>
    <Routes>
     
      <Route path="/" element={<Counter />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/countereffect" element={<Counters />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  </Router>

  );
}

export default App;
