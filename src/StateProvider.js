import React, { createContext, useContext, useReducer } from "react";
export const StateContext=createContext(); //hold the data (context create)
export function StateProvider ({reducer,initialState,children}){ 
  return(
    <>
    <StateContext.Provider value={useReducer(reducer,initialState)}> 
    {/* here use useReducer */}
        {children}
        {/* which children state provide */}
    </StateContext.Provider>
    </>
  )
};
// export const useStateValue=()=>useContext(StateContext);
// export default StateProvider;