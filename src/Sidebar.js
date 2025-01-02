import { Link } from "react-router-dom";

function Sidebar(){
    return <div className="sidebar">
        <h2>Sidebar</h2>
        <p><Link style={{color:"#abdbe3"}} to="/home">Home</Link></p>
        <p><Link style={{color:"#abdbe3"}} to="/about">About</Link></p>
        <p><Link style={{color:"#abdbe3"}} to="/contact">Contact</Link></p>

        <div style={{position:"absolute", bottom:"5vh"}}>
            Bottom text
        </div>
    </div>
}

export default Sidebar;