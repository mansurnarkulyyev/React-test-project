import React from 'react';
import addPlus from "../../images/icon/plus.svg"
import st from "./Users.module.css"
import axios from 'axios';
import userPhoto from '../../images/download.png'


class Users extends React.Component {

    componentDidMount() {
        // axios.get(`https://jsonplaceholder.typicode.com/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.props.setUsers(response.data)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCountUsers / this.props._limit);
        //обшие количество пользователей делим на кол стр, приходит к нас из users-reducer.js
        let pages = [];

        for (let i = 1; i <= pagesCount; i += 1) {
            pages.push(i);
        }

        return (<div>
            <div>
                {pages.map(page => {
                    return <span className={this.props._page === page && st.page}>{page}</span>
                })}
            </div>


            <ul className={st.users}>{
                // users приходит сюда от usersContainer / users: state.usersPage.users, и мапаем мы ключом указали uzers
                this.props.users.map(user =>//пропсы в классах приходит через this под копотом.
                    <li key={user.id} className={st.item}>
                        <img src={userPhoto} alt="John" className={st.img} />
                        <h1 className={st.userName}>{user.name}</h1>
                        <p className={st.web}>{user.website}</p>
                        <div className={st.location}>
                            <p className={st.address}>{user.company.name}</p>
                            <p className={st.address}>{user.address.city}</p>
                            <p className={st.address}>{user.address.geo.lat}</p>
                        </div>
                        <button className={st.cardBtn}>Follow</button>
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
    }
}

export default Users;