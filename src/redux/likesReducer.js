import { INCREMENT, DECREMENT } from "./types"

const initialState = {
    Likes: 0
}

export const likesReducer = (state = initialState, action) => {
    console.log('likesReducer >', action)

    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                Likes: state.Likes + 1
            }
        case DECREMENT:
            return{
                ...state,
                Likes: state.Likes - 1
            }
            default:
                return state;
    }
}