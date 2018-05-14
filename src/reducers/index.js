import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";

const rootReducer = combineReducers({
  gameStore: gameReducer
});

export default rootReducer;
