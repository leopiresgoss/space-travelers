import { useSelector } from 'react-redux';

const Missions = () => {
  const missionsList = useSelector((state) => state.missions);

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
