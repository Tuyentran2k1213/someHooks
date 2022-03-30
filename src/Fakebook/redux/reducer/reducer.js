import { ADD_CMT } from "../constant";

const initialState = {
    comments: [
        {   
            name: 'Yone',
            content: 'Hello! Do i know you ?',
        },
        {
            name: 'Dude',
            content: 'cacccc !',
        }
    ]
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_CMT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }
        default:
            return {...state};
    }
}

export default reducer;