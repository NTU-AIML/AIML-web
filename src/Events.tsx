// import { useEffect, useState } from "react"
import Bar from "./Bar"

import { Card, CardContent } from "./components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel"



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

        

        <Carousel className="" style={{width:"100%"}}>
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2" style={{width:"50%"}}>
                    <div className="">
                    <Card>
                        <CardContent style={{display:"flex", flexDirection:"column", alignContent:"center", justifyContent:"center'"}}>
                            <h1 style={{textAlign:"center", fontSize:"2em", fontWeight:"bold"}}>Event title</h1>
                            <img src="fumos.png" style={{width:"100%", margin:"10px"}}/>
                            <p style={{textAlign:"center", fontSize:"1.2em"}}>
                                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                            </p>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
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