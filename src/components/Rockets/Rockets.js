import { useSelector } from 'react-redux';
import RocketList from './RocketsList';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rocketsReducer.rockets);
  const fetching = useSelector((state) => state.rocketsReducer.fetching);
  return (
    <>
      {!fetching && rocketsList.length !== 0 && (
        <RocketList rockets={rocketsList} />
      )}
      {!fetching && rocketsList.length === 0 && (
        <h3>Something went wrong while fetching the data.</h3>
      )}
      {fetching && (
        <h3>Fetching data please wait...</h3>
      )}
    </>
  );
};

export default Rockets;
