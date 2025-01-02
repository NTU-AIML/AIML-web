import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./Sidebar"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
    <div className="split-screen">
      <Sidebar />
      
      <div className="main-content">
        {/* <h1>Main Content</h1> */}
        <Routes>
          {/* Route to the correct pages */}
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />

          <Route path="/" element={<Navigate to="/Home" />} />
          {/* Reroute invalid pages */}
          <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>
      </div>


    </div>
    </>
  );
}

export default App;
