import { useSelector } from 'react-redux';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rocketsReducer.rockets);
  const fetching = useSelector((state) => state.rocketsReducer.fetching);
  return (
    <div className="container rockets">
      {!fetching && (
        <ul className="rockets-list">
          {rocketsList.map((rocket) => (
            <li key={rocket.id}>{`id: ${rocket.id}, name: ${rocket.name}`}</li>
          ))}
        </ul>
      )}
      {fetching && (
        <h3>Fetching data please wait...</h3>
      )}
    </div>
  );
};

export default Rockets;
