import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MissionsPage from './pages/Missions';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
