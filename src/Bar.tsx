import { useState, useEffect } from "react";

type props = {
    children?: any,
    backgroundColor?: string,
    imgPath?: string,
    swapPos?: boolean,
    height?: string,
    style?: any,
};

function Bar({backgroundColor, children, imgPath, swapPos, height}: props){
    
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

    const cardStyle: React.CSSProperties =  {
        display:"flex",
        flexDirection:"row",
        flexWrap:"nowrap",
        width:"100%",
        height:height,
        backgroundColor:backgroundColor,
        alignItems:"center",
        margin:"0px",
        padding:"0px",
        // boxShadow:"1px 4px 4px rgba(0, 0, 0, 0.5)",
    }
    const textStyle: React.CSSProperties = {
        display:"flex",
        flexDirection:"column",
        flexWrap:"nowrap",
        width:"50%",
        flexShrink:"0",
        // padding:"10px",
        justifyContent: "center",
        alignItems: "center",
    }
    const imgContainerStyle: React.CSSProperties = {
        margin:"0",
        height:"100%",
        width:"50%",
        overflow:"hidden",
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
    }
    const imgStyle: React.CSSProperties = {
        height:"100%",
        width:"100%",
        flexShrink:"0",
        objectFit:"cover",
        objectPosition:"center",
        padding:"0",
        margin:"0",
    }

    // useEffect(()=>{
        if(width <= 600){
            cardStyle.flexDirection = "column"
            cardStyle.height=""
            imgContainerStyle.width = "100%"
            imgContainerStyle.height = ""
            textStyle.width = "90%"
            // imgStyle.height = "50%"
        }
    //     else{
    //         cardStyle.flexDirection = "row"
    //         cardStyle.height=height
    //         imgContainerStyle.width = "50%"
    //         imgContainerStyle.height = "100%"
    //         textStyle.width = "50%"
    //     }
    // }, [width]);
    
    // return <div style={cardStyle}>
    //     <div style={textStyle}>{children}</div>
    //     <img style={imgStyle} src={imgPath} alt={"event "+title}/>
    // </div>

    return <div style={cardStyle}>
        {swapPos ? 
        <div style={textStyle}>{children}</div>
        :
        <div style={imgContainerStyle}>
            <img style={imgStyle} src={imgPath} alt="pic"/>
        </div>
        }
        {swapPos ?
        <div style={imgContainerStyle}>
            <img style={imgStyle} src={imgPath} alt="pic"/>
        </div>
        :
        <div style={textStyle}>{children}</div>
        }
    </div>
}

export default Bar;