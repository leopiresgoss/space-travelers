import PropTypes from 'prop-types';
import './RocketCard.css';

const RocketCard = ({
  id, name, description, image,
}) => (
  <div className="rocket-card">
    <img src={image} alt="rocket type" />
    <div className="info-rocket">
      <h3>
        {name}
      </h3>
      <p>
        {description}
      </p>
      <button type="button" data-id={id}>Reserve Rocket</button>
    </div>
  </div>
);
RocketCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default RocketCard;
