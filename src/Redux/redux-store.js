import {combineReducers, legacy_createStore as createStore} from "redux"; 
import dialogsReducer from "./dialogs-reducer";
import futureReducer from "./future-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    futurePage: futureReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers)

export default store;