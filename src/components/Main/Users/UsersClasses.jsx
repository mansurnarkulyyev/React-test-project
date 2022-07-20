import React from 'react';
import addPlus from "../../images/icon/plus.svg"
import st from "./Users.module.css"
import axios from 'axios';
import userPhoto from '../../images/download.png'


class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                props.setUsers(response.data)
            })
    }
    render() {
        return (<div>
            <ul className={st.users}>{
                // users приходит сюда от usersContainer / users: state.usersPage.users, и мапаем
                this.props.users.map(user =>//в usersContainer/mapStateToProps мы ключом указали uzers 
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