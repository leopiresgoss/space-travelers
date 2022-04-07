import { HashRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from '../components/NavBar/NavBar';

describe('NavBar Test', () => {
  test('Render NavBar', () => {
    const Element = (
      <HashRouter>
        <NavBar />
      </HashRouter>
    );
    const tree = renderer.create(Element).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('NavBar Navigation', () => {
    const Element = (
      <HashRouter>
        <NavBar />
      </HashRouter>
    );
    render(Element);
    const rocketsLink = screen.getByText('Rockets');
    userEvent.click(rocketsLink);
    expect(rocketsLink.classList.contains('active')).toBeTruthy();
    const missionsLink = screen.getByText('Missions');
    userEvent.click(missionsLink);
    expect(missionsLink.classList.contains('active')).toBeTruthy();
    const profileLink = screen.getByText('My Profile');
    userEvent.click(profileLink);
    expect(profileLink.classList.contains('active')).toBeTruthy();
  });
});
