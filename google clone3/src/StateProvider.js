import React, { createContext, useContext, useReducer } from "react";
export const StateContext=createContext(); //hold the data (context create)
  export const StateProvider=({reducer,initialState,children})=>( 
    //here provider its accept reducer initial state childern(which children  i want data provider)
    <StateContext.provider value={useReducer(reducer,initialState)}> 
    {/* here use useReducer */}
        {children}
        {/* which children state provide */}
    </StateContext.provider>
);
export const useStateValue=()=>useContext(StateContext);
export default StateProvider;