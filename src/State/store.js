import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/Reducer";

const rootReducer = combineReducers({
    auth: authReducer,
});

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;
