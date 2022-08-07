import React from 'react'
import st from './Login.module.css';

const LoginForm = (props) => {
    return (<>
        <h1>Login</h1>
        <form onSubmit={props.handleSubmit}>
            <div>
                <input className={st.item} type="text" component={'input '} name="username" placeholder={"Username"} required />
            </div>
            <div>
                <input className={st.item} type="text" component={'input '} name="password" placeholder={"Password"} required />
            </div>
            <label>
                <input type="checkbox" checked="checked" component={'input '} name="remember" style={{ marginBottom: "15" }} /> Remember me
            </label>
            <div>
                <button>Login</button>
            </div>
        </form>
    </>
    )
}

export default LoginForm;
