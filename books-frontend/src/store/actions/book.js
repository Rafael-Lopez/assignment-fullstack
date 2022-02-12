import axios from 'axios';

import * as actionTypes from './actionTypes';

const setBooks = (books) => {
    return {
        type: actionTypes.GET_BOOKS,
        payload: books
    };
};

const getBooksFailed = () => {
    return {
        type: actionTypes.GET_BOOKS_FAILED,
		payload: "Error while fetching books"
    };
};

export const initBooks = () => {
    return dispatch => {
        axios.get('/books')
            .then( response => {
                dispatch( setBooks(response.data) );
            }
        ).catch(error => {
                dispatch( getBooksFailed() );
        });
    };
};