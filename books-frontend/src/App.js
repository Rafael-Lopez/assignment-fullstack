import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import BookList from './components/BookList/BookList';
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<BookList/>} />
        <Route path="/books" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
