import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension/logOnlyInProduction";
import rootReducer from "./reducers";

const storeEnhancer = devToolsEnhancer();
const store = createStore(rootReducer, storeEnhancer);

export default store;
