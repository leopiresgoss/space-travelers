import PropTypes from 'prop-types';
import './RocketsReserved.css';

const RocketsReserved = ({ rockets }) => (
  <div className="reserved-container">
    <h2>My Rockets</h2>
    {rockets.length === 0 && (
      <h3> There are no rockets reserved</h3>
    )}
    {rockets.length > 0 && (
      <ul className="rockets-reserved">
        {
          rockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))
        }
      </ul>
    )}
  </div>
);

RocketsReserved.propTypes = {
  rockets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    reserved: PropTypes.bool,
  })).isRequired,
};
export default RocketsReserved;
