import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";
const AppContext = createContext();

const initialState = {
  data: [],
  loading: true,
  error: null
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
