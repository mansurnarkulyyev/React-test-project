/* eslint-disable no-undef */
// const FOLLOW = "FOLLOW";
// const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {

    users: [
        // {
        //     "id": 1,
        //  "name": "Leanne Graham",
        //  "address": {"city": "Gwenborough","geo": {"lat": "-37.3159"}},
        //  "website": "hildegard.org",
        //     "company": { "name": "Romaguera-Crona" },
        // photoUrl: "https://www.mobisafar.com/images/testimonial/dummy-profile.png"}
        // 
    ],
    _limit: 5,
    totalCountUsers: 0,
    _page: 1

}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // case FOLLOW:
        //     return {
        //         ...state,
        //// users:[...state.users]
        //         users: state.users.map(user => {
        //             if (user.id === action.userId) {
        //                 return { ...user, followed: true }
        //             }
        //             return user;
        //         })
        //     };
        //     case UN_FOLLOW:
        //      return {
        //         ...state,
        //         users: state.users.map(user => {
        //             if (user.id === action.userId) {
        //                 return { ...user, followed: false }
        //             }
        //             return user;
        //         })
        //       };
        case SET_USERS: {
            // return {...state, ...state.users}

            return {...state, users:[...action.users]}
            // return {...state, users:[...state.users, ...action.users]}
       }
        default:
            return state;
}
};
// export const followAC = (userId) => ({ type: FOLLOW, userId }); //AC - ActionCreator
// export const unFollowAC = (userId) => ({ type: UN_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer; 