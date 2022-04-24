import { INCREMENT, DECREMENT } from "./types"

const initialState = {
    Likes: 0
}

export const likesReducer = (state = initialState, action) => {

    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                Likes: state.Likes + 1
            }
        case DECREMENT:
            if (state.Likes > 0) {
                return{
                    ...state, 
                    Likes: state.Likes - 1
                }
            }
            default:
                return state;
    }
}