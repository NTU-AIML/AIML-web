import { Link } from "react-router-dom";
// import { Logo } from "../public/logo.png"

function Sidebar(){
    return <div className="sidebar" style={{position:"relative"}}>
        <img style={{width:"100%", objectFit:"contain"}} src="/logo.png" alt="logo"/>

        <h1>AIML Club</h1>
        <h3><Link style={{color:"#abdbe3"}} to="/home">Home</Link></h3>
        <h3><Link style={{color:"#abdbe3"}} to="/about">About</Link></h3>
        {/* <h3><Link style={{color:"#abdbe3"}} to="/contact">Contact</Link></h3> */}

        {/* <div style={{position:"absolute", width:"auto", bottom:"2vh", wordWrap:"break-word"}}>
            <p>Contact us:</p>
            <p>dfghjksfduygsdhsjfij</p>
            <p>+65 1234 5678</p>
            <p>abcd@efg.hij</p>
        </div> */}
    </div>
}

export default Sidebar;