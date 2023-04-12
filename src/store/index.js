import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import mainReducer from "./reducers/mainReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  pokemon: mainReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
