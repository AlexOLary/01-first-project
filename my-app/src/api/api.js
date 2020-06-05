import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "42e303e5-31b5-4140-a664-60d6b386b5f6"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage} &count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}


/*export const getUsersUnFollow = (unFollow) => {
    return instance.delete(`follow?page=${u.id}`)
        .then(response => {
            return response.data;
        });
}

export const getUsersFollow = (follow) => {
    return instance.post(`follow?page=${u.id}`)
        .then(response => {
            return response.data;
        });
}*/
