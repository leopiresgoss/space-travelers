import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MissionsPage from './pages/Missions';
import Profile from './pages/Profile';
import RocketsPage from './pages/Rockets';
import { getRocketsList } from './redux/rockets/rockets';

function App() {
  // dispatch the actions
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsList());
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<RocketsPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
