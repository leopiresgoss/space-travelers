import fetchMissionsData from '../../services/missionsService';

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
  const data = await fetchMissionsData();
  const payload = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
    reserved: false,
  }));

  dispatch({
    type: GET_MISSIONS,
    payload,
  });
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});
