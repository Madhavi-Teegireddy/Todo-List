import * as types from "./actionType";



const todoReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_NEW_TODO:
        return [action.payload, ...state]

    default:
        return state
  }
}

export default todoReducer;