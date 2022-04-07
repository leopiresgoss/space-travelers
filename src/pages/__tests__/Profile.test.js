import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Profile from '../Profile';
import store from '../../redux/configureStore';
import { GET_MISSIONS } from '../../redux/missions/missions';
import { GETROCKETS_SUCCESS } from '../../redux/rockets/rockets';

const missionsData = [
  {
    name: 'Mission 1',
    id: 'Mission-1',
    description: 'First Mission Description',
    reserved: false,
  },
];

const rocketsData = [
  {
    id: 1,
    name: 'First Rocket',
    description: 'First Rocket Description',
    image: 'https://image-link.com',
    reserved: false,
  },
];

const profileMock = () => {
  render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );
};

describe('Test My Profile', () => {
  test('If store is without data, shoud display no reservations', () => {
    store.dispatch({ type: GETROCKETS_SUCCESS, payload: [] });
    store.dispatch({ type: GET_MISSIONS, payload: [] });
    profileMock();
    expect(screen.getByText('There are no missions reserved')).toBeInTheDocument();
    expect(screen.getByText('There are no rockets reserved')).toBeInTheDocument();
  });

  test('If show nothing with all data as not reserved', () => {
    // dispatch mocked data
    store.dispatch({ type: GETROCKETS_SUCCESS, payload: rocketsData });
    store.dispatch({ type: GET_MISSIONS, payload: missionsData });
    profileMock();
    expect(screen.getByText('There are no missions reserved')).toBeInTheDocument();
    expect(screen.getByText('There are no rockets reserved')).toBeInTheDocument();
  });

  test('If rockets and missions name are displayed after being reserved', () => {
    store.dispatch({
      type: GETROCKETS_SUCCESS,
      payload: [
        { ...rocketsData[0], reserved: true },
      ],
    });
    store.dispatch({
      type: GET_MISSIONS,
      payload: [
        { ...missionsData[0], reserved: true },
      ],
    });
    profileMock();
    expect(screen.getByText('First Rocket')).toBeInTheDocument();
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
  });
});
