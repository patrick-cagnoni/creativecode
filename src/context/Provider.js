import React, { createContext, useReducer } from 'react';

import userReducer, { INITIAL_STATE as userInitialState } from 'context/user';
import generalReducer, {
  INITIAL_STATE as generalInitialState,
} from 'context/general';

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, userInitialState);
  const [generalState, generalDispatch] = useReducer(
    generalReducer,
    generalInitialState
  );

  return (
    <GlobalContext.Provider
      value={{
        userState,
        userDispatch,
        generalState,
        generalDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useContext = (prop) => React.useContext(GlobalContext)[prop];
