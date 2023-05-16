import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import CabinetDataReducer from "./States/CabinetData";
import ConfigDataReducer from "./States/ConfigData";

const rootReducer = combineReducers({
    cabinetState: CabinetDataReducer,
    configState: ConfigDataReducer,
})

export default function generateStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
}