import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketsReserved from '../components/Rockets/RocketsReserved';
import ReservedMissions from '../components/Missions/ReservedMissions';
import { getMissionsList } from '../redux/missions/missions';

const Profile = () => {
  const dispatch = useDispatch();
  const rocketsList = useSelector((state) => state.rocketsReducer.rockets);
  const missionsList = useSelector((state) => state.missions);

  useEffect(() => {
    // check if the missionList is at the initial state
    if (missionsList.length === 0) {
      dispatch(getMissionsList());
    }
  }, []);

  return (
    <div className="flex flex-sm-nowrap container-fluid">
      <ReservedMissions missions={missionsList.filter((mission) => mission.reserved)} />
      <RocketsReserved rockets={rocketsList.filter((rocket) => rocket.reserved)} />
    </div>
  );
};

export default Profile;
