import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsList } from '../../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsList());
  }, []);

  // const data = useSelector((state) => state.missions);

  return (
    <div className="container missions" />
  );
};

export default Missions;
