// import { useEffect, useState } from "react"
import Bar from "../Bar"

function Events(){
    return <>
        <h1 style={{padding:"10px"}}>Events and Initiatives by AIML Club</h1>

        <Bar imgPath="/fumos.png" backgroundColor="#d9d9d9">
            <h1>Event Name</h1>
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </Bar>
        
        <Bar imgPath="/fumos.png" swapPos={true}>
            <h1>Event Name</h1>
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </Bar>
        
        <Bar imgPath="/fumos.png" backgroundColor="#d9d9d9">
            <h1>Event Name</h1>
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </Bar>

        <Bar imgPath="/fumos.png" swapPos={true}>
            <h1>Event Name</h1>
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </Bar>

        
    </>
}

export default Events;