/* eslint-disable import/prefer-default-export */
const RESERVED_MISSIONS = 'RESERVED_MISSIONS';

export const storeReservedMissions = (reservedList) => {
  localStorage.setItem(RESERVED_MISSIONS, JSON.stringify(reservedList));
};

export const fetchReservedMissions = () => {
  const reservedList = localStorage.getItem(RESERVED_MISSIONS);
  if (reservedList === null) return [];
  return JSON.parse(reservedList);
};
