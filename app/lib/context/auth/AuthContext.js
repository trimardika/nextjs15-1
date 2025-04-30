"use client"

import React, { createContext, useContext, useState } from 'react';
import { utils } from "../../var/globalVar";
import { setLocalStorage, getLocalStorage } from "../../fn/globalFn";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const getStoredJWT = () => {
    const defaultData = getLocalStorage(utils.localStorageName.login);
    const defaultDataRes = defaultData ? defaultData : null;
    return defaultDataRes ? JSON.parse(defaultDataRes) : null;
  }

  const [authUser, setAuthUser] = useState(getStoredJWT());

  const fnAuthUser = (state) => {
    setLocalStorage(utils.localStorageName.login, state ? JSON.stringify(state) : null);

    setAuthUser(state);
  }

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, fnAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);