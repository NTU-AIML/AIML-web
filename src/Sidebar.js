import { Link } from "react-router-dom";
import {useState} from "react";
// import { Logo } from "../public/logo.png"

function Sidebar(){
    const[visible, setVisible] = useState(true);


    return <>{visible ? 
        <div className="sidebar" style={{width:"200px", position:"relative", padding:"30px"}}>
            <img style={{width:"100%", objectFit:"contain"}} src="/logo.png" alt="logo"/>

            <h1>AIML Club</h1>
            <h3><Link style={{color:"#abdbe3"}} to="/home">Home</Link></h3>
            <h3><Link style={{color:"#abdbe3"}} to="/about">About</Link></h3>
            <h3><Link style={{color:"#abdbe3"}} to="/events">Events</Link></h3>

            <button onClick={()=>setVisible(!visible)}
                style={{width:"100%",
                        backgroundColor:"rgba(0,0,0,0.3)",
                        border: "2px solid rgba(0,0,0,1)",
                        borderRadius: "10px",
                        color:"rgba(255,255,255,1)",
                        padding:"5px"}}>
                Hide sidebar
            </button>
        </div>
        :
        <div className="sidebar" style={{width:"35px", position:"relative"}}>
            <button onClick={()=>setVisible(!visible)}
                style={{width:"100%",
                        height:"100%",
                        backgroundColor:"rgba(0,0,0,0)",
                        border: "rgba(0,0,0,0)",
                        color:"rgba(255,255,255,1)",
                        padding:"0"}}>
                {visible ? "Hide" : "Show"}
            </button>
        </div>
    }</>
    
}

export default Sidebar;