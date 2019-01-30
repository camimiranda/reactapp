import {combineReducers} from 'redux'

// Individual reducers
import users from './users'
import products from './products'
import categories from './categories'

export const rootReducer = combineReducers({users, products, categories})