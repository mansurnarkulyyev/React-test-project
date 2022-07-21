import {combineReducers, legacy_createStore as createStore} from "redux"; 
import dialogsReducer from "./dialogs-reducer";
import futureReducer from "./future-reducer";
import sidebarReducer from "./sidebar-reducer";
import todosReducer from "./my-past-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    futurePage: futureReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer, //usersReducer приходит с users-reducer.js
    todosPage: todosReducer,
})
//futurePage, dialogspage,sidebar,usersPage, это все ветки от глобального
let store = createStore(reducers);

window.store = store;

export default store; 