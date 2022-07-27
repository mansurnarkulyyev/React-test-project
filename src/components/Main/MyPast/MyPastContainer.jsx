import React from "react";
import {
    completed,
    setCurrentPage,
    getTodos,
    getTodos2,
    setTotalTodosCount,
    toggleIsFetching,
    uncompleted,
} from "Redux/my-past-reducer";
// import axios from 'axios';
import MyPast from "./MyPast";

import Preloader from "components/commons/Preloader";
import { compose } from "redux";
// import { usersAPI } from "api/api";

const { connect } = require("react-redux");

class MyPastContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);

        this.props.getTodos()
        // usersAPI.getTodos(this.props.currentPage, this.props.pageSize)
        //     .then(response => {
        //         // debugger
        //         this.props.toggleIsFetching(false);
        //         this.props.setTodos(response.data);
        //         // console.log(response.headers['x-total-count']);
        //         this.props.setTotalTodosCount(response.headers['x-total-count'])
        //     })
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        // console.log(this.props.setCurrentPage(pageNumber));
        // debugger
        this.props.getTodos2();
        // usersAPI.getTodos2(pageNumber)
        //     .then(response => {
        //         this.props.toggleIsFetching(false);
        //         this.props.setTodos(response.data);
        //     })
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <MyPast totalTodosCount={this.props.totalTodosCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                todos={this.props.todos}
                completed={this.props.completed}
                uncompleted={this.props.uncompleted}
            />
        </>
    }
};


let mapStateToProps = (state) => {
    // принимает глобальный стейт
    return {
        todos: state.todosPage.todos,  // возврашает новый объект с данными которые нам ну
        pageSize: state.todosPage.pageSize,
        totalTodosCount: state.todosPage.totalTodosCount,// pageSize и totalCountUsers с redux-store приходит
        currentPage: state.todosPage.currentPage,
        isFetching: state.todosPage.isFetching,
        completed: state.todosPage.completed,
        uncompleted: state.todosPage.uncompleted
    }
}


// 1- let mapDispatchToProps = (dispatch) => {
//     return {
//         completed: (todoId) => {
//             dispatch(completedAC(todoId))//completedAC(todoId) это и есть action
//         },
//         uncompleted: (todoId) => {
//             dispatch(unCompletedAC(todoId))
//         },
//         setTodos: (todos) => {
//             dispatch(setTodosAC(todos))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTodosTotalCount: (totalCount) => {
//             dispatch(setTodosTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (totalCount) => {
//             dispatch(toggleIsFetchingAC(totalCount))
//         }

//     }
// }
// 2- делаем деструктуризайию и передаем как второй объект на connet вместо mapDispatchToProps{
//     completed: completedAC,
//     uncompleted: unCompletedAC,
//     setTodos: setTodosAC,
//     setCurrentPage: setCurrentPageAC,
//     setTodosTotalCount: setTodosTotalCountAC,
//     toggleIsFetching: toggleIsFetchingAC,
//     }

export default compose(
    connect(mapStateToProps,
        {
            completed,
            uncompleted,
            getTodos,
            getTodos2,
            setCurrentPage,
            setTotalTodosCount,
            toggleIsFetching,
        })
)(MyPastContainer);

