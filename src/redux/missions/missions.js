import fetchMissionsData from '../../services/missionsService';

// Actions
const GET_MISSIONS = 'GET_MISSIONS';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_MISSIONS:
      return [
        ...action.payload,
      ];
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
  }));

  dispatch({
    type: GET_MISSIONS,
    payload,
  });
};
