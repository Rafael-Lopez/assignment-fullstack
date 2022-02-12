import { Routes, Route } from "react-router-dom";
import './App.css';

import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
