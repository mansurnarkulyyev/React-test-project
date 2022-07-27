import { usersAPI } from "api/api";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {

    userId: null,
    email: null,
    name:null, 
    // login:null, 
    isFetching: false,
    isAuth: false

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            };
            
        default:
            return state;
}
};

export const setUserData = (userId, email,name) => ({ type: SET_USER_DATA, data:{userId, email,name}});
export const getAuthUserData = () => (dispatch)=>{ //dispath внутренная функция которая возвращает внешнее функцию называется санка 
 usersAPI.getAuthUserData()
     .then(response => {
                // console.log(response.data);
                // this.props.toggleIsFetching(false);
// dispatch(setUserData(userId, email,name)) 
                // this.props.setUsers(response.data);
                // console.log(response.data.headers);
                // this.props.setUsersTotalCount(response.data.totalCount)
                // this.props.setTodosTotalCount(response.headers['x - total - count'])

            })
}


export default authReducer; 