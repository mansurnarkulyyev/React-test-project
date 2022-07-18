import React from 'react';
// import { Link } from 'react-router-dom';
import addPlus from "../../images/icon/plus.svg"
import st from "./Users.module.css"

const Users = (props) => {
    return (
        <div>{
            // users приходит сюда от usersContainer / users: state.usersPage.users, и мапаем
            props.users.map(user =>
                <ul key={user.id} className={st.users}>
                    <li className={st.item}>
                        <div className={st.card}>
                            <img src={user.photoUrl} alt="John" className={st.img} />
                            <h1 className={st.userName}>{user.fullName}</h1>
                            <p className={st.title}>{user.status}</p>
                            <div className={st.location}>
                                <p>{user.location.country}</p>
                                <p>{user.location.city}</p>
                            </div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                    /* follow сюда придет с userContainer/ mapDispatchToProps */
                                }} className={st.cardBtn}>Unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }}
                                    className={st.cardBtn}>Follow</button>
                            }

                        </div>
                    </li>
                </ul>
            )

        }
            <button className={st.button} >
                <p className={st.buttonText}>Add New Topic</p>
                <img
                    src={addPlus}
                    alt="add topic"
                    className={st.buttonImg}
                /> </button>
        </div>
    );
};
export default Users;