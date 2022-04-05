import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { getMissionsList } from '../../redux/missions/missions';
import Mission from './Mission';
import './mission.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsList = useSelector((state) => state.missions);

  const headList = [
    {
      id: 1,
      title: 'Mission',
    },
    {
      id: 2,
      title: 'Description',
    },
    {
      id: 3,
      title: 'Status',
    },
    {
      id: 4,
      title: ' ',
    },
  ];

  useEffect(() => {
    // check if the missionList is at the initial state
    if (missionsList.length === 0) {
      dispatch(getMissionsList());
    }
  }, []);

  return (
    <div className="container-fluid missions">
      <Table striped bordered hover>
        <thead>
          <tr>
            {headList.map((item) => (
              <th key={item.id} className="fs-5">{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {missionsList.map((mission) => (
            <Mission key={mission.id} mission={mission} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
