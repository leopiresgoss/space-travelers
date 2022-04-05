const GETROCKETS_BEGIN = 'space-travelers/rockets/GETROCKETSBEGIN';
const GETROCKETS_SUCCESS = 'space-travelers/rockets/GETROCKETSSUCCESS';
const GETROCKETS_FAILURE = 'space-travelers/rockets/GETROCKETSFAILURE';
const BASE_URL = 'https://api.spacexdata.com/v3/rockets';

const INITIAL_STATE = {
  rockets: [],
  fetching: true,
};

export function getRocketsBegin() {
  return {
    type: GETROCKETS_BEGIN,
  };
}

export function getRocketsSuccess(rockets) {
  return {
    type: GETROCKETS_SUCCESS,
    payload: rockets,
  };
}

export function getRocketsFailure() {
  return {
    type: GETROCKETS_FAILURE,
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GETROCKETS_SUCCESS:
      return {
        rockets: action.payload,
        fetching: false,
      };
    case GETROCKETS_BEGIN:
      return {
        ...state,
        fetching: true,
      };
    case GETROCKETS_FAILURE:
      return state;
    default: return state;
  }
}

export function getRocketsList() {
  return (dispatch) => {
    const url = `${BASE_URL}`;
    dispatch(getRocketsBegin());
    fetch(url).then((response) => (
      response.json().then((json) => {
        const rockets = json.map((rocket) => ({
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          image: rocket.flickr_images[0],
        }));
        dispatch(getRocketsSuccess(rockets));
      }))).catch(() => dispatch(getRocketsFailure()));
  };
}
