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

const deleteBookAction = (id) => {
    return {
        type: actionTypes.DELETE_BOOK,
        payload: id
    };
};

const deleteBookFailed = () => {
    return {
        type: actionTypes.DELETE_BOOK_FAILED,
		payload: "Error while deleteing book!"
    };
};

export const deleteBook = (id) => {
    return dispatch => {
        axios.delete(`/books/${id}`)
            .then( response => {
                dispatch( deleteBookAction(id) );
            }
        ).catch(error => {
                dispatch( deleteBookFailed() );
        });
    };
};