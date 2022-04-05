const API_URL = 'https://api.spacexdata.com/v3/missions';

const fetchMissionsData = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export default fetchMissionsData;
