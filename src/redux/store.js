import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {tasksReducer} from "./reducers/tasksReducer";
import {userReducer} from "./reducers/userReducer";

export const store = createStore(combineReducers({
    tasks: tasksReducer,
    user: userReducer
}), composeWithDevTools())