import './navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Rockets',
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
  },
  {
    id: 3,
    path: '/profile',
    text: 'My Profile',
  },
];

const NavBar = () => (
  <nav className="flex">
    <div className="header flex">
      <img src={logo} alt="corporate logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <div className="navlinks flex">
      {
      links.map((link) => (
        <NavLink
          key={link.id}
          to={link.path}
        >
          {link.text}
        </NavLink>
      ))
    }
    </div>
  </nav>
);

export default NavBar;
