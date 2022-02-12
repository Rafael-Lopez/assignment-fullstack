import * as actionTypes from '../actions/actionTypes';

const initialState = {
    books: [],
    loading: true,
    error: false
};

const book = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOKS:
            return {
                ...state,
                books: action.payload,
                loading: false
            };
        case actionTypes.GET_BOOKS_FAILED:
            return {
                loading: false, 
                error: action.payload 
            };  
        default:
            return state;
    }
}

export default book;