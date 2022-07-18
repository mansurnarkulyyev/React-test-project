/* eslint-disable no-undef */
const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";


let initialState = {
    users: [
            // { id: "1", photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmNZo9wLt4zSz-u9vt4wP2HxNE9_5z5j2YKyOWuMrKyMnfqo9Wagr422Mq6_7c_dfAig&usqp=CAU",followed: false, fullName: "Diana", status: "Hi how are you", location:{city:"Kiev",country: "Ukraine"}},
            // { id: "2", photoUrl: "https://www.mobisafar.com/images/testimonial/dummy-profile.png",followed: true, fullName: "Dim", status: "Hi bla bla", location:{city:"Ankara",country: "Turkey"}},
            // { id: "3", photoUrl: "https://www.mobisafar.com/images/testimonial/dummy-profile.png",followed: false, fullName: "Dud", status: "Hi hoo", location:{city:"Tosh",country: "Uzb"}},
            // { id: "4", photoUrl: "https://www.mobisafar.com/images/testimonial/dummy-profile.png",followed: true, fullName: "Rih", status: "Hi are you ok?", location:{city:"Ashgabat",country: "Tm"}},
          ],
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            };
            case UN_FOLLOW:
             return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
              };
        case SET_USERS: {
            return {...state, users:[...state.users, ...action.users]}
       }
        default:
            return state;
}
};
export const followAC = (userId) => ({ type: FOLLOW, userId }); //AC - ActionCreator
export const unFollowAC = (userId) => ({ type: UN_FOLLOW, userId });
export const setUsersAC = (userId) => ({ type: SET_USERS, userId });

export default usersReducer; 