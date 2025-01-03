// import { useEffect, useState } from "react"


function EventCard({title, imgPath, children}){
    const cardStyle = {
        display:"flex",
        height:"30vh",
        flexDirection:"row",
        // flexWrap:"wrap",
        // alignItems:"center",
        // backgroundColor:"rgb(178, 228, 237)",
        backgroundColor:"white",
        padding:"10px",
        flex:"1 1 calc(30%)",
        boxShadow:"1px 4px 4px rgba(0, 0, 0, 0.5)",
        // borderRadius:"20px",
        boxSizing:"border-box",
        margin:"20px",
    }
    const imgStyle = {
        width:"20%",
        objectFit:"contain",
        flexShrink:"0",
    }

    if(window.innerWidth <= 600){
        cardStyle.flexDirection = "column"
        cardStyle.height = "auto"
        imgStyle.width = "100%"
    }

    return <div style={cardStyle}>
        <img style={imgStyle} src={imgPath} alt={"event " + title}/>
        <div style={{margin:"10px"}}>
            <h1 style={{textAlign:"center"}}>{title}</h1>
            <p style={{fontSize:"1.3em"}}>{children}</p>
        </div>
    </div>
}

function Events(){
    return <>
        <h1>Events and Initiatives by AIML Club</h1>

        <EventCard title="Event 1" imgPath="/placeholder.png">
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </EventCard>
        
        <EventCard title="Event 2" imgPath="/placeholder.png">
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </EventCard>
        
        <EventCard title="Event 3" imgPath="/placeholder.png">
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </EventCard>

        <EventCard title="Event 3" imgPath="/placeholder.png">
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </EventCard>

        
    </>
}

export default Events;