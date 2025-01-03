function Card({children, backgroundColor, width}){
    const cardStyle = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignContent:"center",
        width:width,

        margin:"10px",
        backgroundColor:backgroundColor,
        borderColor:backgroundColor,
        // border:"5px solid",
        borderRadius:"15px",
        boxShadow:"1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
        paddingLeft:"10px",
        paddingRight:"10px",
    }

    return <div style={cardStyle}>
        {children}
    </div>
}

export default Card;