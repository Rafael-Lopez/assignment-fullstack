import { Routes, Route } from "react-router-dom";
import './App.scss';

import Navigation from "./components/Navigation/Navigation";
import EditBook from "./pages/EditBook/EditBook";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<EditBook/>} />
        <Route path="/edit" element={<EditBook/>} />
      </Routes>
    </div>
  );
}

export default App;
