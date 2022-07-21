import React from "react";
import edit from "../../images/icon/edit 1.svg"
import st from "components/Main/MyPast/MyPast.module.css";
import axios from 'axios';


const MyPast = (props) => {
  // console.log(props.todos);
  if (props.todos.length === 0) {
    // props.setUsers(
    //     [
    //         {
    //             "id": 1,
    //             "name": "Leanne Graham",
    //             "address": { "city": "Gwenborough", "geo": { "lat": "-37.3159" } },
    //             "website": "hildegard.org",
    //             "company": { "name": "Romaguera-Crona" },
    //             photoUrl: "https://www.mobisafar.com/images/testimonial/dummy-profile.png"
    //         }
    //     ]
    // )

    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        // debugger
        // console.log(response.data);
        // console.log(props.setUsers);

        props.setTodos(response.data

        )
      })
  }

  return (
    <div>
      <div>
        <span>1</span>
        <span className={st.selected}>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
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


        {/* <li className={st.item}>
        <div className={st.title__wrap}>
          <h3 className={st.title}>Tesla Car is a best electric car</h3>
          <div className={st.edit__border}>
            <img
              className={st.edit}
              src="./images/icon/edit 1.svg"
              alt="edit"
            />
          </div>
        </div>
        <p className={st.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen
        </p>
      </li>
      <li className={st.item}>
        <div className={st.title__wrap}>
          <h3 className={st.title}>Tesla Car is a best electric car</h3>
          <div className={st.edit__border}>
            <img
              className={st.edit}
              src="./images/icon/edit 1.svg"
              alt="edit"
            />
          </div>
        </div>
        <p className={st.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen
        </p>
      </li>
      <li className={st.item}>
        <div className={st.title__wrap}>
          <h3 className={st.title}>Tesla Car is a best electric car</h3>
          <div className={st.edit__border}>
            <img
              className={st.edit}
              src="./images/icon/edit 1.svg"
              alt="edit"
            />
          </div>
        </div>
        <p className={st.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen
        </p>
      </li>
      <li className={st.item}>
        <div className={st.title__wrap}>
          <h3 className={st.title}>Tesla Car is a best electric car</h3>
          <div className={st.edit__border}>
            <img
              className={st.edit}
              src="./images/icon/edit 1.svg"
              alt="edit"
            />
          </div>
        </div>
        <p className={st.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen
        </p>
      </li>
      <li className={st.item}>
        <div className={st.title__wrap}>
          <h3 className={st.title}>Tesla Car is a best electric car</h3>
          <div className={st.edit__border}>
            <img
              className={st.edit}
              src="./images/icon/edit 1.svg"
              alt="edit"
            />
          </div>
        </div>
        <p className={st.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen
        </p>
      </li>
      <li className={st.item}>
        <div className={st.title__wrap}>
          <h3 className={st.title}>Tesla Car is a best electric car</h3>
          <div className={st.edit__border}>
            <img
              className={st.edit}
              src="./images/icon/edit 1.svg"
              alt="edit"
            />
          </div>
        </div>
        <p className={st.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen
        </p>
      </li>
      <li className={st.item}>
        <div className={st.title__wrap}>
          <h3 className={st.title}>Tesla Car is a best electric car</h3>
          <div className={st.edit__border}>
            <img
              className={st.edit}
              src="./images/icon/edit 1.svg"
              alt="edit"
            />
          </div>
        </div>
        <p className={st.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen
        </p>
      </li>
      <li className={st.item}>
        <div className={st.title__wrap}>
          <h3 className={st.title}>Tesla Car is a best electric car</h3>
          <div className={st.edit__border}>
            <img
              className={st.edit}
              src="./images/icon/edit 1.svg"
              alt="edit"
            />
          </div>
        </div>
        <p className={st.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen
        </p>
      </li> */}
      </ul>
    </div>
  );
};

export default MyPast;
