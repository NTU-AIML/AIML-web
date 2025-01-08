import { Link } from "react-router-dom";
import {useState} from "react";

// import { Logo } from "../public/logo.png"

type props = {
    target: string,
};

function SidebarLink({target}: props){
    return <Link style={{color:"rgb(178, 228, 237)",
                         display:"flex",
                         justifyContent:"left",
                         flexWrap:"wrap",
                         alignItems:"auto",
                         paddingLeft:"1vw",
                         paddingRight:"1vw",
                         marginTop:"30px",
                         textDecoration:"none"}}
                 to={"/" + target}>
        <img src={"/"+target+".svg"} alt={target+" icon"}/>
        <h2 style={{textDecoration:"none", margin:"3px", marginLeft:"10px"}}>{target}</h2>
    </Link>
}

function Sidebar(){
    const[visible, setVisible] = useState(window.innerWidth > 600);


    return <>{visible ? 
        <div className="sidebar" style={{
            width:"200px",
            position:"relative",
            padding:"30px",
            backgroundColor:"#304b5b",
            color:"white",
            wordWrap:"break-word",
            flexShrink:"0",
        }}>
            <img style={{width:"100%", objectFit:"contain", backgroundColor:"white"}} src="/logo.png" alt="logo"/>

            <h1 style={{fontWeight:"bold", fontSize:"1.6em"}}>AIML Club</h1>
            
            <SidebarLink target="Home" />
            <SidebarLink target="Events" />
            <SidebarLink target="About" />
            <SidebarLink target="Cactus" />
            

            <button onClick={()=>setVisible(!visible)}
                style={{width:"50px",
                        height:"50px",
                        backgroundColor:"rgba(0,0,0,0)",
                        border: "0px solid rgba(0,0,0,0)",
                        position:"absolute",
                        bottom:"10px"
                        }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" fill="white" viewBox="0 0 512 512">
                    <path d="M 0 448 Q 2.2857142857142856 473.14285714285717 27.428571428571427 475.42857142857144 Q 52.57142857142857 473.14285714285717 54.857142857142854 448 L 54.857142857142854 64 L 54.857142857142854 64 Q 52.57142857142857 38.857142857142854 27.428571428571427 36.57142857142857 Q 2.2857142857142856 38.857142857142854 0 64 L 0 448 L 0 448 Z M 155.42857142857142 236.57142857142858 Q 146.28571428571428 244.57142857142858 146.28571428571428 256 Q 146.28571428571428 267.42857142857144 155.42857142857142 276.57142857142856 L 310.85714285714283 422.85714285714283 L 310.85714285714283 422.85714285714283 Q 330.2857142857143 437.7142857142857 349.7142857142857 421.7142857142857 Q 364.57142857142856 401.14285714285717 348.57142857142856 382.85714285714283 L 243.42857142857142 283.42857142857144 L 243.42857142857142 283.42857142857144 L 338.2857142857143 283.42857142857144 L 484.57142857142856 283.42857142857144 Q 509.7142857142857 281.14285714285717 512 256 Q 509.7142857142857 230.85714285714286 484.57142857142856 228.57142857142858 L 338.2857142857143 228.57142857142858 L 243.42857142857142 228.57142857142858 L 347.42857142857144 130.28571428571428 L 347.42857142857144 130.28571428571428 Q 364.57142857142856 110.85714285714286 348.57142857142856 91.42857142857143 Q 330.2857142857143 74.28571428571429 310.85714285714283 90.28571428571429 L 155.42857142857142 236.57142857142858 L 155.42857142857142 236.57142857142858 Z"/>
                    </svg>
            </button>
        </div>
        :
        <div className="sidebar" style={{width:"40px", position:"relative", backgroundColor:"#304b5b", flexShrink:"0",}}>
            <button onClick={()=>setVisible(!visible)}
                style={{width:"100%",
                        height:"100%",
                        backgroundColor:"rgba(0,0,0,0)",
                        border: "rgba(0,0,0,0)",
                        color:"rgba(255,255,255,1)",
                        padding:"0"}}>
                {/* Show */}
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" fill="white" viewBox="0 0 512 512">
                <path d="M 54.857142857142854 64 Q 52.57142857142857 38.857142857142854 27.428571428571427 36.57142857142857 Q 2.2857142857142856 38.857142857142854 0 64 L 0 448 L 0 448 Q 2.2857142857142856 473.14285714285717 27.428571428571427 475.42857142857144 Q 52.57142857142857 473.14285714285717 54.857142857142854 448 L 54.857142857142854 64 L 54.857142857142854 64 Z M 502.85714285714283 276.57142857142856 Q 512 267.42857142857144 512 256 Q 512 244.57142857142858 502.85714285714283 236.57142857142858 L 347.42857142857144 90.28571428571429 L 347.42857142857144 90.28571428571429 Q 328 74.28571428571429 309.7142857142857 91.42857142857143 Q 293.7142857142857 110.85714285714286 310.85714285714283 129.14285714285714 L 416 228.57142857142858 L 416 228.57142857142858 L 320 228.57142857142858 L 173.71428571428572 228.57142857142858 Q 148.57142857142858 230.85714285714286 146.28571428571428 256 Q 148.57142857142858 281.14285714285717 173.71428571428572 283.42857142857144 L 320 283.42857142857144 L 416 283.42857142857144 L 310.85714285714283 382.85714285714283 L 310.85714285714283 382.85714285714283 Q 293.7142857142857 401.14285714285717 309.7142857142857 420.57142857142856 Q 328 437.7142857142857 348.57142857142856 421.7142857142857 L 504 275.42857142857144 L 502.85714285714283 276.57142857142856 Z"/>
                </svg>
            </button>
        </div>
    }</>
    
}

export default Sidebar;