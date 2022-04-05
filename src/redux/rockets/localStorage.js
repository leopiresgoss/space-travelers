function saveToLocalStorage(rockets) {
  const ids = [];
  rockets.forEach((rocket) => {
    if (rocket.reserved === true) ids.push(rocket.id);
  });
  window.localStorage.setItem('ReservedRockets', ids.join());
}
export default saveToLocalStorage;
