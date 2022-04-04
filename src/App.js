import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import store from './redux/configureStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
