import { useSelector } from 'react-redux';
import RocketsReserved from '../components/Rockets/RocketsReserved';

const Profile = () => {
  const rocketsList = useSelector((state) => state.rocketsReducer.rockets);
  return (
    <div className="flex">
      <RocketsReserved rockets={rocketsList.filter((rocket) => rocket.reserved)} />
      <RocketsReserved rockets={rocketsList.filter((rocket) => rocket.reserved)} />
    </div>
  );
};

export default Profile;
