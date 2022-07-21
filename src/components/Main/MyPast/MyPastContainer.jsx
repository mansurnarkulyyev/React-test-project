// import React from "react";
import { completedAC, setTodosAC, unCompletedAC } from "Redux/my-past-reducer";
import MyPast from "./MyPast";

const { connect } = require("react-redux");

let mapStateToProps = (state) => { // принимает глобальный стейт
    return {
        todos: state.todosPage.todos,  // возврашает новый объект с данными которые нам ну
        pageSize: state.todosPage.pageSize,
        totalCountUsers: state.todosPage.totalCountUsers,// upageSize и totalCountUsers с redux-store приходит
        _page: state.todosPage._page
    }
}
// debugger


let mapDispatchToProps = (dispatch) => {
    return {
        completed: (todoId) => {
            dispatch(completedAC(todoId))//completedAC(todoId) это и есть action
        },
        uncompleted: (todoId) => {
            dispatch(unCompletedAC(todoId))
        },
        setTodos: (todos) => {
            dispatch(setTodosAC(todos))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyPast);