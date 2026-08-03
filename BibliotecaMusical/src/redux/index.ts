import { combineReducers } from "redux";
import libraryReducers from "./libraryReducer";

const rootReducer = combineReducers({libraryReducers});

export default rootReducer