import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import BookList from './components/BookList/BookList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList/>} />
        <Route path="/books" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
