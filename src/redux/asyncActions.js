import { requestUsers, recieveUsers, requestProducts, recieveProducts, requestCategories, recieveCategories} from './actions'
import { fetchUsersFromApi } from '../api/users'
import { fetchProductsFromApi } from '../api/product'
import { fetchCategoriesFromApi } from '../api/categories'


// There are 2 types of actions: the ones that returns an object 
// The ones that returns a function, like this one
// When invoked this function it'll call the requestProducts action (in this case will initiate the loader) this is inmediate, a normal action
// This function will return another function that when called
// will dispatch an asynchronous function (calling the api), and after receiving it will dispatch receive products action with the items

export const fetchUsers = function (dispatch) {
    return function () {
        dispatch(requestUsers())
        return fetchUsersFromApi()
            .then(res => dispatch(recieveUsers(res)))
    }
}

export const fetchProducts = function (dispatch) {
    return function () {
        dispatch(requestProducts())
        return fetchProductsFromApi()
            .then(res => dispatch(recieveProducts(res)))
    }
}


export const fetchCategories = function (dispatch) {
    return function () {
        dispatch(requestCategories())
        return fetchCategoriesFromApi()
            .then(res => dispatch(recieveCategories(res)))
    }
}
