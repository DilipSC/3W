import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './pages/AddUser';
import LeaderBoard from './pages/LeaderBoard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddUser />} />
        <Route path='/leaderboard' element={<LeaderBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
