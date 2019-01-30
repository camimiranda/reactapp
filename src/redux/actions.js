import { REQUEST_USERS, RECEIVE_USERS, REQUEST_PRODUCTS, RECEIVE_PRODUCTS, RECEIVE_CATEGORIES,REQUEST_CATEGORIES,CHANGE_FILTER} from "./actionTypes";

//Users
export const requestUsers = () => ({
    type: REQUEST_USERS
})

export const receiveUsers = (res) => ({
    type: RECEIVE_USERS,
    payload: {
        items: res
    }
})
//Products
export const requestProducts = () => ({
    type: REQUEST_PRODUCTS
})

export const receiveProducts = (res) => ({
    type: RECEIVE_PRODUCTS,
    payload: {
        items: res
    }
})

//Categories
export const recieveCategories = (res) => ({
    type: RECEIVE_CATEGORIES,
    payload: {
        items: res
    }
})

export const requestCategories = () => ({
    type: REQUEST_CATEGORIES
})

export const changeFilter = (filter) => ({
    type: CHANGE_FILTER,
    payload: {
        filter
    }
})