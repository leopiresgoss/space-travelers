import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissionsList } from '../../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsList = useSelector((state) => state.missions);

  useEffect(() => {
    // check if the missionList is at the initial state
    if (missionsList.length === 0) {
      dispatch(getMissionsList());
    }
  }, []);

  return (
    <div className="container missions">
      <ul className="missions-list">
        {missionsList.map((mission) => (
          <li key={mission.id}>{`id: ${mission.id}, name: ${mission.name}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Missions;
