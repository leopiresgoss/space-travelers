import { useSelector } from 'react-redux';
import RocketList from './RocketsList';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rocketsReducer.rockets);
  const fetching = useSelector((state) => state.rocketsReducer.fetching);
  return (
    <>
      {!fetching && (
        <RocketList rockets={rocketsList} />
      )}
      {fetching && (
        <h3>Fetching data please wait...</h3>
      )}
    </>
  );
};

export default Rockets;
