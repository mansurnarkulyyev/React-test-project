import { usersAPI } from "api/api";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

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
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            return { ...state, totalUsersCount: action._limit };
        }
            case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching };
        }
            case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress.filter(id => id !== action.userId)]
                    : state.followingInProgress.filter(id => id!== action.userId) 
            };
        }
        default:
            return state;
}
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId }); //AC - ActionCreator
export const unfollowSuccess = (userId) => ({ type: UN_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, _limit: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId ) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId  });

export const getUsers = (currentPage, pageSize) => { //getUsersThunkCreator
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
            // debugger

                dispatch(toggleIsFetching(false));
                dispatch(setUsers(response.data));//
                dispatch(setUsersTotalCount(response.headers['x-total-count']));
            })
    }
};

export const follow = (userId) => {//ThunkCreator
    return (dispatch) => {
           dispatch(toggleFollowingProgress(true, userId));
           
          dispatch(followSuccess(userId))
    }
}

export const unfollow = (userId) => {//ThunkCreator
    return (dispatch) => {
           dispatch(toggleFollowingProgress(true, userId));
           
          dispatch(followSuccess(userId))
    }
}


export default usersReducer; 