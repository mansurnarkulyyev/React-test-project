import React from 'react';
// import { Link } from 'react-router-dom';
import addPlus from "../../images/icon/plus.svg"
import st from "./Users.module.css"
import axios from 'axios';
import userPhoto from '../../images/download.png'

// import { useState } from 'react';

// function fetchPosts() {
//     const promise = axios.get('https://jsonplaceholder.typicode.com/users')

//     return promise.then((response) => {
//         return response.data
//     })
//     // console.log(response.data);
// }

// function onTask(tasks) {
//     tasks.map(el =>)
// }

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
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

            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    // debugger
                    // console.log(response.data);
                    // console.log(props.setUsers);

                    props.setUsers(response.data
                        // [
                        //     // {
                        //     //     "id": 1,
                        //     //     "name": "Leanne Graham",
                        //     //     "address": { "city": "Gwenborough", "geo": { "lat": "-37.3159" } },
                        //     //     "website": "hildegard.org",
                        //     //     "company": { "name": "Romaguera-Crona" },
                        //     //     photoUrl: "https://www.mobisafar.com/images/testimonial/dummy-profile.png"
                        //     // },

                        // ]
                    )
                })
        }
    }

    return (<div>
        <ul className={st.users}>{
            // users приходит сюда от usersContainer / users: state.usersPage.users, и мапаем
            props.users.map(user =>//в usersContainer/mapStateToProps мы ключом указали uzers 
                <li key={user.id} className={st.item}>
                    <img src={userPhoto} alt="John" className={st.img} />
                    {/* <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="John" className={st.img} /> */}
                    <h1 className={st.userName}>{user.name}</h1>
                    <p className={st.web}>{user.website}</p>
                    <div className={st.location}>
                        <p className={st.address}>{user.company.name}</p>
                        <p className={st.address}>{user.address.city}</p>
                        <p className={st.address}>{user.address.geo.lat}</p>
                    </div>
                    <button className={st.cardBtn}>Follow</button>

                    {/* {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                               follow сюда придет с userContainer/ mapDispatchToProps 
                                }} className={st.cardBtn}>Unfollow</button>
                                : <button onClick={() => { props.follow(user.id) }}
                                    className={st.cardBtn}>Follow</button>
                            } */}

                </li>
            )

        }
        </ul>
        <button className={st.button} onClick={getUsers}>
            <p className={st.buttonText}>Add New Users</p>
            <img
                src={addPlus}
                alt="add topic"
                className={st.buttonImg}
            /> </button>
    </div>
    );
};
export default Users;