import Preloader from 'components/commons/Preloader';
import React from 'react';

const FutureInfo = (props) => {
    // debugger
    if (!props.comments) {
        return <Preloader />
    }

    // let userInfo = props.users

    // let pages = [];
    // for (let i = 1; i <= userInfo; i += 1) {
    //     pages.push(i);
    //     //   if (i === 20) break;
    // }
    // debugger
    // console.log(props.users.name);
    // console.log(props.comments.body);
    return (
        <div>
            {/* <ul>{
                props.comments.map(comment =>
                    <li key={comment.id}>
                        Hello i am user info
                        {props.comment.body}
                    </li>)
            }      </ul> */}
            {props.comments.body}



        </div>
    );
};
export default FutureInfo;