
// import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./Sidebar"

import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"

function App() {
  return (
    <>
    <div style={{display:"flex", height:"100vh"}}>
      <Sidebar />
      
      <div className="main-content" style={{
        flexGrow:"1", /* Take up the remaining space */
        // padding:"20px",
        backgroundColor:"#e6ebec",
        overflowX:"hidden",
        overflowY:"auto",
      }}>
        
        {/* <h1>Main Content</h1> */}
        <Routes>
          {/* Route to the correct pages */}
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Events" element={<Events/>} />

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
