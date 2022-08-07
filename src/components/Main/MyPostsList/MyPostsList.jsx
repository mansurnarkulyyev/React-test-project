import React from 'react';
import axios from 'axios';
import st from './MyPostsList.module.css';
import PostForm from './PostForm';
class MyPostsList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            errorMessage: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // console.log(response);
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({ errorMessage: 'Error reprieving data' })
            })
    };
    render() {
        const { posts, errorMessage } = this.state;
        return (
            <>
                <PostForm />

                <div className={st.posts}>
                    {posts.length
                        ? posts.map(post => <ul className={st.past}>{
                            // props.todos.map(todo =>
                            <li key={post.id} className={st.item}>
                                <div className={st.title__wrap}>
                                    <h3 className={st.title}>{post.title}</h3>
                                </div>
                                <p className={st.text}>
                                    {post.body}
                                </p>
                            </li>
                            // )
                        }
                        </ul>
                        )
                        : null
                    }
                    {
                        errorMessage
                            ? <div>{errorMessage}</div>
                            : null
                    }
                </div>
            </>
        );
    };
};
export default MyPostsList;