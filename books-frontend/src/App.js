import { Routes, Route } from "react-router-dom";
import './App.css';

import BookList from './components/BookList/BookList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookList/>} />
      </Routes>
    </div>
  );
}

export default App;
