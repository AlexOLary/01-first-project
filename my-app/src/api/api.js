import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "42e303e5-31b5-4140-a664-60d6b386b5f6"
    }
})


export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage} &count=${pageSize}`)
        .then(response => {
            return response.data;
        });
}

export const getUsersFollower = (currentPage = 2, pageSize = 12) => {
    return instance.get(`follow?page=${u.id}`)
        .then(response => {
            return response.data;
        });
}