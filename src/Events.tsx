// import { useEffect, useState } from "react"
// import Bar from "./Bar"

import { Card, CardContent } from "./components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel"


type eventCardProp = {
    key: string,
    title: string,
    children?: any,
}

function EventCard({key, title, children}: eventCardProp){
    return <CarouselItem key={key} style={{display:"flex", justifyContent:"center"}}>
        <Card style={{width:"80%"}}>
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
            textAlign:"center",
            backgroundColor:"rgba(255,255,255,1)",
            background:`url(${process.env.PUBLIC_URL}/background.jpg)`,
        }}>
            Events and Initiatives by AIML Club
        </h1>

        

        <Carousel style={{margin:window.innerWidth<=600 ? "0px" : "60px"}}>
            <CarouselContent>
                
                <EventCard key="back2school" title="Back2School">
                    Lorem Ipsum
                </EventCard>

                <EventCard key="cactus" title="CACTUS">
                    Lorem Ipsum
                </EventCard>

            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>        

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