
const COMPLETED = "COMPLETED";
const UN_COMPLETED = "UN_COMPLETED";
const SET_TODOS = "SET_TODOS";

let initialState = {

    todos: [
// { "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false },
// {"userId": 1,"id": 2,"title": "quis ut nam facilis et officia qui","completed": false},
// { "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false }
        //    
    ],
    pageSize: 12  ,
    totalCountUsers: 0,
    _page: 1

}
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMPLETED:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.todoId) {
                        return { ...todo, completed: true }
                    }
                    return todo;
                })
            };
            case UN_COMPLETED:
             return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.todoId) {
                        return { ...todo, uncompleted: false }
                    }
                    return todo;
                })
              };
        case SET_TODOS: {
             return {...state, todos:[...state.todos, ...action.todos]}
            // return {...state, users:[...state.users, ...action.users]}
       }
        default:
            return state;
}
};
export const completedAC = (todoId) => ({ type: COMPLETED, todoId }); //AC - ActionCreator
export const unCompletedAC = (todoId) => ({ type: UN_COMPLETED, todoId });
export const setTodosAC = (todos) => ({ type: SET_TODOS, todos });

export default todosReducer; 