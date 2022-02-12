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

const addBookAction = (book) => {
    return {
        type: actionTypes.ADD_BOOK,
        payload: book
    };
};

const addBookFailed = () => {
    return {
        type: actionTypes.ADD_BOOK_FAILED,
		payload: "Error while adding book!"
    };
};

export const addBook = (book) => {
    return dispatch => {
        axios.post('/books', JSON.stringify(book), {headers: {'Content-Type': 'application/json'}})
            .then( response => {
                dispatch( addBookAction(response.data) );
            }
        ).catch(error => {
                dispatch( addBookFailed() );
        });
    };
};

const editBookAction = (book) => {
    return {
        type: actionTypes.EDIT_BOOK,
        payload: book
    };
};

const editBookFailed = () => {
    return {
        type: actionTypes.EDIT_BOOK_FAILED,
		payload: "Error while editing book!"
    };
};

export const editBook = (book) => {
    return dispatch => {
        axios.put(`/books/${book.id}`, JSON.stringify(book), {headers: {'Content-Type': 'application/json'}})
            .then( response => {
                dispatch( editBookAction(response.data) );
            }
        ).catch(error => {
                dispatch( editBookFailed() );
        });
    };
};