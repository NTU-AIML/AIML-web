// import { useEffect, useState } from "react"
import Bar from "../Bar"

function Events(){
    return <>
        <h1 style={{padding:"10px"}}>Events and Initiatives by AIML Club</h1>

        <Bar imgPath="/Event1.png" backgroundColor="#d9d9d9" height="auto" swapPos={false}>
            <h1>C.A.C.T.U.S.</h1>
            <p style={{fontSize:"1.4em", margin:"10px"}}>
                short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
        </Bar>

        
    </>
}

export default Events;