function Bar({backgroundColor, children, imgPath, swapPos}){
    const cardStyle = {
        display:"flex",
        flexDirection:"row",
        flexWrap:"no-wrap",
        width:"100%",
        backgroundColor:backgroundColor,
        alignItems:"center",
        margin:"0px",
        padding:"0px",
        // boxShadow:"1px 4px 4px rgba(0, 0, 0, 0.5)",
    }
    const textStyle = {
        display:"flex",
        flexDirection:"column",
        flexWrap:"no-wrap",
        width:"50%",
        flexShrink:"0",
        padding:"10px",
        justifyContent: "center",
        alignItems: "center",
    }
    const imgStyle = {
        width:"50%",
        flexShrink:"0",
        objectFit:"contain",
    }

    // return <div style={cardStyle}>
    //     <div style={textStyle}>{children}</div>
    //     <img style={imgStyle} src={imgPath} alt={"event "+title}/>
    // </div>

    return <div style={cardStyle}>
        {swapPos ? 
        <div style={textStyle}>{children}</div>
        :
        <img style={imgStyle} src={imgPath} alt="pic"/>
        }
        {swapPos ?
        <img style={imgStyle} src={imgPath} alt="pic"/>
        :
        <div style={textStyle}>{children}</div>
        }
    </div>
}

export default Bar;