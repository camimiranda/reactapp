import { REQUEST_USERS, RECEIVE_USERS } from "../actionTypes";
// allIds store only the ids of all the todos
// byIds it's like a map where it stores in [id] -> todo
const initialState = {
    items: [],
    isFetching: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
      case REQUEST_USERS: 
        return Object.assign({}, state, {isFetching: true})
      case RECEIVE_USERS:
        return Object.assign({}, state, {items: action.payload.items, isFetching: false})
    default:
      return state;
  }
}