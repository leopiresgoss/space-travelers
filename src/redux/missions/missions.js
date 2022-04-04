import fetchMissionsData from '../../services/missionsService';

// Actions
const GET_MISSIONS = 'GET_MISSIONS';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_MISSIONS:
      return [
        ...state,
        action.payload,
      ];
    default: return state;
  }
}

// Action creators
export const getMissionsList = () => async (dispatch) => {
  const payload = await fetchMissionsData();
  console.log(payload);

  dispatch({
    type: GET_MISSIONS,
    payload,
  });
};
