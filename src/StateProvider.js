import React, { createContext, useContext, useReducer } from "react";

//Prepares dataLayer
export const StateContext = createContext();

//Wrap the web and provide the Data layer
export const StateProvider = ({reducer, initialState, children}) => (
      <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
      </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext);