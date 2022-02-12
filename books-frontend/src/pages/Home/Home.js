import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BookList from "../../components/BookList/BookList";
import { initBooks } from '../../store/actions';

const Home = () => {
    const dispatch = useDispatch();
    const bookList = useSelector((state) => state.bookList);
    const {loading, error, books} = bookList;

    useEffect(() => {
        dispatch( initBooks() )
    }, [dispatch]);

    return (
        <BookList books={books} loading={loading} error={error}/>
    );
};

export default Home;