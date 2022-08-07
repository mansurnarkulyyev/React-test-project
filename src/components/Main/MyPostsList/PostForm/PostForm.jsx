import axios from 'axios';
import React from 'react';
import st from './PostForm.module.css';


class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: '',
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    submitHandler = e => {
        e.preventDefault()
        // console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(response => {
                // debugger
                console.log(response.data);
                this.setState(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    };

    // addPost = () => {
    //     this.setState(this.response.data)
    // }

    render() {
        const { userId, title, body } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler} className={st.form}>
                    <div>
                        <input
                            className={st.searchInput}
                            type="text"
                            name='userId'
                            value={userId}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            className={st.searchInput}
                            type="text"
                            name='title'
                            value={title}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            className={st.searchInput}
                            type="text"
                            name='body'
                            value={body}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button className={st.button}
                        // onClick={this.addPost}
                        type="submit">
                        <p className={st.buttonText}>Add New Post</p>
                    </button>
                </form>
            </div>
        );
    }
};
export default PostForm;