import rootState from "./reducers";
import {createStore} from "redux";

let store = createStore(rootState);

export default store;