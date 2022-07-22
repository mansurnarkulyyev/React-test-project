import React from "react";
import {
    completed,
    setCurrentPage,
    setTodos,
    setTodosTotalCount,
    toggleIsFetching,
    uncompleted,
} from "Redux/my-past-reducer";
import axios from 'axios';
import MyPast from "./MyPast";

import Preloader from "components/commons/Preloader";

const { connect } = require("react-redux");

class MyPastContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
            .then(response => {
                // console.log(response.data);
                this.props.toggleIsFetching(false);

                this.props.setTodos(response.data);
                // console.log(response.data.headers);
                this.props.setTodosTotalCount(response.data.totalCount)
                // this.props.setTodosTotalCount(response.headers['x - total - count'])

                // console.log(response.);

            })
    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        // console.log(this.props.setCurrentPage(pageNumber));
        // debugger
        axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${pageNumber}&_limit=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);

                this.props.setTodos(response.headers['x - total - count']);
            })
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


let mapStateToProps = (state) => { // принимает глобальный стейт
    return {
        todos: state.todosPage.todos,  // возврашает новый объект с данными которые нам ну
        pageSize: state.todosPage.pageSize,
        totalTodosCount: state.todosPage.totalTodosCount,// pageSize и totalCountUsers с redux-store приходит
        currentPage: state.todosPage.currentPage,
        isFetching: state.todosPage.isFetching
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

export default connect(mapStateToProps,
    {
        completed,
        uncompleted,
        setTodos,
        setCurrentPage,
        setTodosTotalCount,
        toggleIsFetching,
    })(MyPastContainer);