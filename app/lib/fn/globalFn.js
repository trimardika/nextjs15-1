'use client'

import { decodeToken } from "react-jwt";

// START LOCAL STORAGE
export const setLocalStorage = (stateName, stateValue) => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.setItem(stateName, stateValue);
  }
}

export const getLocalStorage = (stateName) => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(stateName);
  }
}

export const removeLocalStorage = (stateName) => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.removeItem(stateName);
  }
}
// END LOCAL STORAGE

// START JWT
export const decodeJWT = (stateJWT, stateKey1, stateKey2) => {
  try {
    return decodeToken(stateJWT[stateKey1])[stateKey2];
  } catch (error) {
    return null;
  }
}
// END JWT