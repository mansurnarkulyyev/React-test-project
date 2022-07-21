
const COMPLETED = "COMPLETED";
const UN_COMPLETED = "UN_COMPLETED";
const SET_TODOS = "SET_TODOS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TODOS_TOTAL_COUNT = "SET_TODOS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {

    todos: [
// { "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false },
// {"userId": 1,"id": 2,"title": "quis ut nam facilis et officia qui","completed": false},
// { "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false }
        //    
    ],
    pageSize: 6,
    totalTodosCount: 0,
    currentPage: 1,
    isFetching:false

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
            return { ...state, todos: action.todos };
            // return {...state, users:[...state.users, ...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }
        case SET_TODOS_TOTAL_COUNT: {
            return { ...state, totalTodosCount: action.count };
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        default:
            return state;
}
};
export const completedAC = (todoId) => ({ type: COMPLETED, todoId }); //AC - ActionCreator
export const unCompletedAC = (todoId) => ({ type: UN_COMPLETED, todoId });
export const setTodosAC = (todos) => ({ type: SET_TODOS, todos });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTodosTotalCountAC = (totalTodosCount) => ({ type: SET_TODOS_TOTAL_COUNT, count: totalTodosCount });
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default todosReducer; 