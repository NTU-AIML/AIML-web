function Bar({backgroundColor, children, imgPath, swapPos, height}){
    const cardStyle = {
        display:"flex",
        flexDirection:"row",
        flexWrap:"no-wrap",
        width:"100%",
        height:height,
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
        // padding:"10px",
        justifyContent: "center",
        alignItems: "center",
    }
    const imgContainerStyle = {
        margin:"0",
        height:"100%",
        width:"50%",
        overflow:"hidden",
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
    }
    const imgStyle = {
        height:"100%",
        width:"100%",
        flexShrink:"0",
        objectFit:"cover",
        objectPosition:"center",
        padding:"0",
        margin:"0",
    }

    if(window.innerWidth <= 600){
        cardStyle.flexDirection = "column"
        cardStyle.height=""
        imgStyle.width = "100%"
        imgContainerStyle.width = "100%"
        imgContainerStyle.height = ""
        textStyle.width = "90%"
        // imgStyle.height = "50%"
    }
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