import * as React from "react"

import { Card, CardContent } from "./components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

function About(){
    return <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"0px", margin:"0px"}}>
        <h1>
            About
        </h1>

        <p style={{fontSize:"1.2em"}}>
            Email: [Insert email]
        </p>
        <p style={{fontSize:"1.2em"}}>
            Website: [Insert links]
        </p>

        <CarouselDemo />


        
    </div>
}

export default About;