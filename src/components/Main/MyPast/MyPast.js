import React from 'react';
import edit from "../../images/icon/edit 1.svg"
import st from "components/Main/MyPast/MyPast.module.css";
// import axios from 'axios';

const MyPast = (props) => {
     let pagesCount = Math.ceil(props.totalTodosCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i);
    //   if (i === 20) break;
    }
  
return (
      <div>
    <div>
      {/* <span className={st.selected}>12345</span> */}
          {pages.map(page => {
            // return <span className={true ? st.selected }>{todo}</span>
            return <span className={props.currentPage  === page && st.selected }
              onClick={(e) => { props.onPageChanged(page); }}>{page}</span>
          })}

        </div>
        <ul className={st.past}>{
         props.todos.map(todo =>
            <li key={todo.id} className={st.item}>
              <div className={st.title__wrap}>
                <h3 className={st.title}>Tesla Car is a best electric car</h3>
                <div className={st.edit__border}>
                  <img
                    className={st.edit}
                    src={edit}
                    alt="edit"
                  />
                </div>
              </div>
              <p className={st.text}>
                {todo.title}
              </p>
              {todo.completed
               ? <button onClick={() => {
                  
                //                axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
                //     withCredentials: true,
                //  headers: {
                //    "API-KEY": "blabla"
                //  }
                //   })
                //    .then(response => {
                //     //  debugger
                //      console.log(response.data);
                //      if (response.data.completed === false) {
                                      props.uncompleted(todo.id);
                //      }
                //  }) 
                  //  follow сюда придет с userContainer/ mapDispatchToProps 
                 
               }} className={st.cardBtn}>
                 uncompleted</button>
               
               : <button onClick={() => {
              //  debugger
                 
              
            //      axios.post(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {}, {
            //         withCredentials: true,
                //  headers: {
                //    "API-KEY": "blabla"
                //  }
            //       })
            //        .then(response => {
            //         //  debugger
            //          console.log(response.data.id);
            //          if (response.data.completed === true) {
                     props.completed(todo.id)
                       
            //          }
            //     // this.props.toggleIsFetching(false);
            // }) 
               }}
                 className={st.cardBtn}>
                 Completed</button>
              }
            </li>
          )
        }
        </ul>
      </div>
    );
};
export default MyPast;