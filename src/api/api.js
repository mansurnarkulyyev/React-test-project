import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: true,
    // headers: {
    // API_KEY:...
    // }
})

export const usersAPI = {
getUsers(currentPage = 1, pageSize = 5 ) {
return instance.get(`users?_page=${currentPage}&_limit=${pageSize}`)
    .then(response => {
        return response; //response вернет promise
      })
    },
    // follow(userId) {
    // return instance.post(http...)
    // }
    // unfollow(userId) {
    // return instance.delete(http...)
    // }
    getComments(userId) {
        return instance.get(`comments/` + userId);
    },
    getUsersForHeader() {
        return instance.get(`users`);
    },
    
    getTodos(currentPage = 1 , pageSize = 12) {
        return instance.get(`todos?_page=${currentPage}&_limit=${pageSize}`);
    },
    getTodos2(pageNumber = 1 , pageSize = 12) {
        return instance.get(`todos?_page=${pageNumber}&_limit=${pageSize}`);
    }
}


// export default usersAPI;



// export const getTodosFunc = (currentPage = 1, pageSize = 10) => {
//     instance.get(`todos?_page=${currentPage}&_limit=${pageSize}`)
//     .then(response => {
//         return response.data; //response вернет promise
//     })
// }

// export default getTodosFunc;