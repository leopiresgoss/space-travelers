import rocketReducer, {
  cancelRocket, getRocketsBegin, getRocketsFailure, getRocketsSuccess, reserveRocket,
} from '../redux/rockets/rockets';

describe('Rockets reducer test', () => {
  test('Rockets Success test', () => {
    const INITIAL_STATE = {
      rockets: [
      ],
      fetching: true,
    };
    const newRockets = [
      {
        id: 1, name: 'Falcon 1', description: 'Short description', reserved: true, image: 'https://imgur.com/DaCfMsj.jpg',
      },
      {
        id: 2, name: 'Falcon 2', description: 'Short description', reserved: true, image: 'https://imgur.com/DaCfMsj.jpg',
      },
    ];

    const newState = rocketReducer(INITIAL_STATE, getRocketsSuccess(newRockets));
    expect(newState.fetching).toBeFalsy();
    expect(newState.rockets.length).toBe(2);
  });

  test('Get Rockets Begin Test', () => {
    const INITIAL_STATE = {
      rockets: [
      ],
      fetching: false,
    };
    const newState = rocketReducer(INITIAL_STATE, getRocketsBegin());
    expect(newState.fetching).toBeTruthy();
  });

  test('Get Rockets Failure Test', () => {
    const INITIAL_STATE = {
      rockets: [
      ],
      fetching: false,
    };
    const newState = rocketReducer(INITIAL_STATE, getRocketsFailure());
    expect(newState.fetching).toBeFalsy();
  });

  test('Rocket Reserved Test', () => {
    const INITIAL_STATE = {
      rockets: [
        {
          id: 1, name: 'Falcon 1', description: 'Short description', reserved: false, image: 'https://imgur.com/DaCfMsj.jpg',
        },
        {
          id: 2, name: 'Falcon 2', description: 'Short description', reserved: false, image: 'https://imgur.com/DaCfMsj.jpg',
        },
      ],
      fetching: false,
    };
    const newState = rocketReducer(INITIAL_STATE, reserveRocket(1));
    expect(newState.rockets.find((rocket) => rocket.id === 1).reserved).toBeTruthy();
  });

  test('Rocket Cancel Test', () => {
    const INITIAL_STATE = {
      rockets: [
        {
          id: 1, name: 'Falcon 1', description: 'Short description', reserved: true, image: 'https://imgur.com/DaCfMsj.jpg',
        },
        {
          id: 2, name: 'Falcon 2', description: 'Short description', reserved: false, image: 'https://imgur.com/DaCfMsj.jpg',
        },
      ],
      fetching: false,
    };
    const newState = rocketReducer(INITIAL_STATE, cancelRocket(1));
    expect(newState.rockets.find((rocket) => rocket.id === 1).reserved).toBeFalsy();
  });
});
