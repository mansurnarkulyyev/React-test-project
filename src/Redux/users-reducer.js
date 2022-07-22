const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching:false

}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
        // users:[...state.users]
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
            // return {...state, ...state.users}

            return {...state, users:[...action.users]}
            // return {...state, users:[...state.users, ...action.users]}
        }
             case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }
             case SET_USERS_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.count };
        }
            case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
        default:
            return state;
}
};
export const follow = (userId) => ({ type: FOLLOW, userId }); //AC - ActionCreator
export const unfollow = (userId) => ({ type: UN_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer; 