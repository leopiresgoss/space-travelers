import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../components/Rockets/Rockets';
import RocketCard from '../components/Rockets/RocketCard';
import RocketList from '../components/Rockets/RocketsList';
import RocketsReserved from '../components/Rockets/RocketsReserved';
import store from '../redux/configureStore';

describe('Components test', () => {
  test('RocketCard test', () => {
    const element = (
      <Provider store={store}>
        <RocketCard
          key={1}
          id={1}
          name="Falcon 1"
          description="The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth."
          reserved={false}
          image="https://imgur.com/DaCfMsj.jpg"
        />
      </Provider>
    );
    const card = renderer.create(element);
    expect(card).toMatchSnapshot();
  });

  test('RocketsList test', () => {
    const rocketsInfo = [
      {
        id: 1, name: 'Falcon 1', description: 'Short description', reserved: false, image: 'https://imgur.com/DaCfMsj.jpg',
      },
      {
        id: 2, name: 'Falcon 2', description: 'Short description', reserved: false, image: 'https://imgur.com/DaCfMsj.jpg',
      },
    ];
    const element = (
      <Provider store={store}>
        <RocketList rockets={rocketsInfo} />
      </Provider>
    );
    const list = renderer.create(element);
    expect(list).toMatchSnapshot();
  });

  test('Reserved Rockets test', () => {
    const rocketsInfo = [
      {
        id: 1, name: 'Falcon 1', description: 'Short description', reserved: true, image: 'https://imgur.com/DaCfMsj.jpg',
      },
      {
        id: 2, name: 'Falcon 2', description: 'Short description', reserved: true, image: 'https://imgur.com/DaCfMsj.jpg',
      },
    ];
    const element = (<RocketsReserved rockets={rocketsInfo} />);
    const list = renderer.create(element);
    expect(list).toMatchSnapshot();
  });

  test('Rockets rendering test', () => {
    // this test only test that the component can be rendered
    const element = (
      <Provider store={store}>
        <Rockets />
      </Provider>
    );
    const rockets = renderer.create(element);
    expect(rockets).toMatchSnapshot();
  });
});
