import counterReducer from "./counter";
import loggedReducer from "./isLogger";

import { combineReducers } from "redux";



const allReducers = combineReducers(
    {
        counter : counterReducer,
        isLogger : loggedReducer
    }
)

export default allReducers ;