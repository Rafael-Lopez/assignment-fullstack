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
                ...state,
                loading: false, 
                error: action.payload 
            };
        case actionTypes.DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(book => action.payload !== book.id)
            };  
        case actionTypes.DELETE_BOOK_FAILED:
            return {
                ...state,
                loading: false, 
                error: action.payload 
            };  
        case actionTypes.ADD_BOOK:
            return {
                ...state,
                books: [...state.books, action.payload]
            };  
        case actionTypes.ADD_BOOK_FAILED:
            return {
                ...state,
                loading: false, 
                error: action.payload 
            }; 
        case actionTypes.EDIT_BOOK:
            const book = state.books.find(book => book.id === action.payload.id);
            book.name = action.payload.name;
            book.author = action.payload.author;
            book.publishingYear = action.payload.publishingYear;
            book.isbnNumber = action.payload.isbnNumber;
            
            return {
                ...state,
                books: state.books
            };  
        case actionTypes.EDIT_BOOK_FAILED:
                return {
                    ...state,
                    loading: false, 
                    error: action.payload 
                };             
        default:
            return state;
    }
}

export default book;