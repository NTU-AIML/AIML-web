
// import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar"

import Home from "./Home"
import About from "./About"
import Events from "./Events"
import Cactus from "./Cactus"


function App() {
  return (
    <>
    <div style={{display:"", height:"100vh"}}>
      
      <Navbar />
      

      
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
          
          <Route path="/Cactus" element={<Cactus/>} />

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
