export default function saveToLocalStorage(rockets) {
  const ids = [];
  rockets.forEach((rocket) => {
    if (rocket.reserved === true) ids.push(rocket.id);
  });
  window.localStorage.setItem('ReservedRockets', ids.join());
}

export function updateReserved(rockets) {
  let reserved = window.localStorage.getItem('ReservedRockets');
  if (!reserved) return rockets;
  reserved = reserved.split(',');
  if (reserved.length === 0) return rockets;
  const newState = rockets.map((rocket) => {
    if (!reserved.includes(String(rocket.id))) return rocket;
    return { ...rocket, reserved: true };
  });
  return newState;
}
