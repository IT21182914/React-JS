import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './Learnings/UseStates/CounterUseState';
import UserProfile from './Learnings/UseStates/UserProfileUseState';
import Counters from './Learnings/UseEffect/UseEffectCounters';
import Timer from './Learnings/UseEffect/Timer';
import ChildComponent from './Learnings/Props/ChildComponent';
import ParentComponent from './Learnings/Props/ParentComponent';
import NameUseState from './Learnings/UseStates/NameUseState';

function App() {
  return (
    <Router>
    <Routes>
     
      <Route path="/" element={<Counter />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/countereffect" element={<Counters />} />
      <Route path="/timer" element={<Timer />} />
      <Route path="/child" element={<ChildComponent />} />
      <Route path="/parent" element={<ParentComponent />} />
      <Route path="/name" element={<NameUseState />} />
    </Routes>
  </Router>

  );
}

export default App;
