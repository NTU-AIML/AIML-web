import { Link } from "react-router-dom";
import {useState, useEffect} from "react";

// import { Logo } from "../public/logo.png"

import {
    NavigationMenu,
    // NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    // NavigationMenuLink,
    NavigationMenuList,
    // NavigationMenuTrigger,
    // NavigationMenuViewport,
  } from "./components/ui/navigation-menu"
  

type props = {
    target: string,
};

function NavbarLink({target}: props){
    const [width, setWidth] = useState(0);
        useEffect(() => {
            const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
            // console.log("updating height");
        };
        window.addEventListener("resize", updateWindowDimensions);
        window.addEventListener("resize", updateWindowDimensions);
        updateWindowDimensions()
        return () => window.removeEventListener("resize", updateWindowDimensions);
    }, []);

    return <Link to={"/"+target} style={{
        margin:"10px",
        fontWeight:"bold",
        fontSize:"1.5em",
        
        color:"rgb(178, 228, 237)",
        height:"10vh",
       
        display:"flex",
        justifyContent:"left",
        alignItems:"center",
        // flexWrap:"nowrap",
    }}>
        {width<=600 ? <></> :
            <img src={"/"+target+".svg"} alt={target+" icon"} style={{height:"1.2em", margin:"10px"}}/>
        }
        {target}
    </Link>
}

function Navbar(){

    return <NavigationMenu style={{height:"10vh",
                                backgroundColor:"#304b5b",
                                color:"white",
                                flexShrink:"0",
                                justifyContent:"left",
                                }}>
        <NavigationMenuList>
            <NavigationMenuItem style={{display:"flex", flexDirection:"row", alignContent:"center", justifyContent:"left"}}>
                <Link to="/Home" style={{alignContent:"center"}}>
                    <img style={{height:"10vh", objectFit:"contain", backgroundColor:"white"}} src="/logo.png" alt="logo"/>
                </Link>

                <NavbarLink target="Home"/>
                <NavbarLink target="Events"/>
                {/* <NavbarLink target="About"/> */}
                <NavbarLink target="Cactus"/>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
}

export default Navbar;