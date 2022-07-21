import React from 'react';
import edit from "../../images/icon/edit 1.svg"
import st from "components/Main/MyPast/MyPast.module.css";


const MyPast = (props) => {
     let pagesCount = Math.ceil(props.totalTodosCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i);
    //   if (i === 20) break;
    }
    // let curP = this.props.currentPage;
    // let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    // let curPL = curP + 5;
    // let slicedPages = pages.slice(curPF, curPL);

return (
      <div>
        <div>
          {pages.map((page, index) => {

            // return <span className={true ? st.selected }>{todo}</span>
            return <span key={index} className={props.currentPage === page ? st.selected : undefined}
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
                  props.uncompleted(todo.id)
                  //  follow сюда придет с userContainer/ mapDispatchToProps 
                }} className={st.cardBtn}>uncompleted</button>
                : <button onClick={() => { props.completed(todo.id) }}
                  className={st.cardBtn}>Completed</button>
              }
            </li>
          )
        }
        </ul>
      </div>
    );
};
export default MyPast;