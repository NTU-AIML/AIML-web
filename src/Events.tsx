// import { useEffect, useState } from "react"
// import Bar from "./Bar"
import { Link } from "react-router-dom";

import { Card, CardContent } from "./components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel"

import { Button } from "./components/ui/button"


type eventCardProp = {
    key: string,
    title: string,
    children?: any,
}

function EventCard({key, title, children}: eventCardProp){
    return <CarouselItem key={key} style={{display:"flex", justifyContent:"center"}}>
        <Card style={{width: window.innerWidth<=600 ? "90%":"100%"}}>
            <CardContent style={{display:"flex", flexDirection:"column", alignContent:"center", justifyContent:"center'"}}>
                <h1 style={{textAlign:"center", fontSize:"2em", fontWeight:"bold", padding:"10px", wordBreak:"break-word"}}>{title}</h1>
                <img src="fumos.png" style={{width:"100%"}} alt="event pic"/>
                <p style={{textAlign:"center", fontSize:"1.2em", padding:"10px"}}>
                    {children}
                </p>
            </CardContent>
        </Card>
    </CarouselItem>
}

function Events(){
    
  
    return <div>
        <h1 style={{
            width:"100%",
            margin:"0px",
            padding:"20px",
            fontSize:"3em",
            fontWeight:"bolder",
            textAlign:"center",
            backgroundColor:"rgba(255,255,255,1)",
            background:`url(${process.env.PUBLIC_URL}/background.jpg)`,
        }}>
            Events
        </h1>

        

        <Carousel style={{margin: window.innerWidth<=600 ? "0px" : "60px"}}>
            <CarouselContent>
                
                <EventCard key="back2school" title="Back2School">
                    <p style={{textAlign:"left"}}>
                        Open to all students. No prior experience is required!
                        Visit our booth on <b>15 Jan 2025</b> to learn more about the club and its activities.
                    </p>
                </EventCard>

                <EventCard key="cactus" title="CACTUS">
                    <Link to="/Cactus" style={{textDecoration:"none", color:"white", display:"flex", justifyContent:"center", margin:"10px"}}>
                        <Button style={{background:"#304b5b", borderRadius:"10px", padding:"25px"}}>
                                <div>
                                    <p style={{textAlign:"center", fontSize:"1.5em", fontWeight:"bold"}}>Learn more</p>
                                </div>
                        </Button>
                    </Link>
                </EventCard>

            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>        

        <p style={{textAlign:"center"}}>
            Slide the card to the left to see other events.
        </p>

        {/* <Bar imgPath="/Event1.png" backgroundColor="#d9d9d9" height="auto" swapPos={false}>
            <h1>C.A.C.T.U.S.</h1>
            <p style={{fontSize:"1.4em", margin:"10px"}}>
                short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                short explanation lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            </p>
        </Bar> */}

        
    </div>
}

export default Events;