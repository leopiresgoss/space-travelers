import fetchMissionsData from '../../services/missionsService';
import { fetchReservedMissions, storeReservedMissions } from '../../services/missionLocalStorage';

// Actions
const GET_MISSIONS = 'GET_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_MISSIONS:
      return [
        ...action.payload,
      ];
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: false };
      });
    default: return state;
  }
}

// Action creators
export const getMissionsList = () => async (dispatch) => {
  const reservedList = fetchReservedMissions();
  const data = await fetchMissionsData();
  const payload = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: reservedList.includes(mission.mission_id),
  }));

  dispatch({
    type: GET_MISSIONS,
    payload,
  });
};

export const joinMission = (id) => (dispatch) => {
  const reservedList = fetchReservedMissions();
  storeReservedMissions([...reservedList, id]);

  dispatch({
    type: JOIN_MISSION,
    id,
  });
};

export const leaveMission = (id) => (dispatch) => {
  const reservedList = fetchReservedMissions();
  const reservedListUpdated = reservedList.filter((missionId) => missionId !== id);
  storeReservedMissions(reservedListUpdated);

  dispatch({
    type: LEAVE_MISSION,
    id,
  });
};
