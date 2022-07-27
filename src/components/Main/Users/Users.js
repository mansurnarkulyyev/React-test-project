import React from 'react';
import st from "./Users.module.css";
import addPlus from "../../images/icon/plus.svg";
import userPhoto from "../../images/download.png";
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        //обшие количество пользователей делим на кол стр, приходит к нас из users-reducer.js

    let pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
      pages.push(i);
    //   if (i === 20) break;
    }
return (
    <div>
        <div>
          {pages.map((page) => {
            return <span className={props.currentPage  === page && st.selected }
              onClick={(e) => { props.onPageChanged(page); }}>{page}</span>
          })}

        </div>
        <ul className={st.users}>{
                // users приходит сюда от usersContainer / users: state.usersPage.users, и мапаем мы ключом указали uzers
                props.users.map(user =>//пропсы в классах приходит через this под копотом.
                    <li key={user.id} className={st.item}>
                        <NavLink to={'./../future/' + user.id}>
                        <img src={userPhoto} alt="John" className={st.img} />
                        </NavLink>
                        <h1 className={st.userName}>{user.name}</h1>
                        <p className={st.web}>{user.website}</p>
                        <div className={st.location}>
                            <p className={st.address}>{user.company.name}</p>
                            <p className={st.address}>{user.address.city}</p>
                            <p className={st.address}>{user.address.geo.lat}</p>
                        </div>
                       {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                 props.unfollow(user.id)//cюда санки приходит из user-reducer
                                // if (props.followingInProgress.some(id => id === user.id)) {
                                //     props.toggleFollowingProgress(true, user.id);
                                //      props.unfollow(user.id)
                                // }
                            //    follow сюда придет с userContainer/ mapDispatchToProps 
                                }} className={st.cardBtn}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                 props.follow(user.id)//cюда санки приходит из user-reducer
                                // if (props.followingInProgress.some(id => id === user.id)) {
                                //     props.toggleFollowingProgress(false, user.id);
                                //      props.follow(user.id)
                                // }
                            }}
                                   className={st.cardBtn}>Follow</button>
                        } 
                        


                    </li>
                )
            }
            </ul>
            <button className={st.button}>
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