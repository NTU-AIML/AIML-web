import { Link } from "react-router-dom";

import Bar from "../Bar"
import Card from "../Card"

function Home(){
    return <div style={{display:"flex", flexDirection:"column", padding:"0px", margin:"0px"}}>

        <h1 style={{
            width:"100%",
            margin:"0px",
            padding:"20px",
            fontSize:"3em",
            textAlign:"center",
            backgroundColor:"rgba(255,255,255,1)",
            // background:`url(${process.env.PUBLIC_URL}/background.jpg)`,
        }}>
            NTU Artificial Intelligence & Machine Learning Club
        </h1>


        <Bar backgroundColor="rgb(217, 217, 217)" imgPath="/fumos.png" swapPos={true}>
            <h1 style={{textAlign:"center"}}>What is AIML Club?</h1>
            <p style={{fontSize:"1.5em"}}>
                A vibrant community for enthusiasts and learners passionate about Artificial Intelligence and Machine Learning.
            </p>
            <p style={{fontSize:"1.5em"}}>
                Whether you’re a beginner eager to learn or an expert looking to share your knowledge, the AIML Club is the place for you.
            </p>
        </Bar>

        <div>
            <h1 style={{textAlign:"center"}}>Our Goals</h1>

            <div style={{display:"flex", flexDirection:"row", overflow:"scroll", marginBottom:"20px"}}>
                <Card backgroundColor="#b2e4ed" width="25%">
                    <h2 style={{color:"#304b5b", textAlign:"center"}}>Education</h2>
                    <p>image here</p>
                    <p style={{fontSize:"1.2em"}}>
                        Offering resources and opportunities to learn about AI/ML concepts, tools, and techniques.
                    </p>
                </Card>

                <Card backgroundColor="#b2e4ed" width="25%">
                    <h2 style={{color:"#304b5b", textAlign:"center"}}>Collaboration</h2>
                    <p>image here</p>
                    <p style={{fontSize:"1.2em"}}>
                        Bringing together like-minded individuals to work on cutting-edge projects.
                    </p>
                </Card>

                <Card backgroundColor="#b2e4ed" width="25%">
                    <h2 style={{color:"#304b5b", textAlign:"center"}}>Innovation</h2>
                    <p>image here</p>
                    <p style={{fontSize:"1.2em"}}>
                    Encouraging the development of impactful solutions to real-world problems using AI/ML.
                    </p>
                </Card>

                <Card backgroundColor="#b2e4ed" width="25%">
                    <h2 style={{color:"#304b5b", textAlign:"center"}}>Networking</h2>
                    <p>image here</p>
                    <p style={{fontSize:"1.2em"}}>
                    Connecting members with industry experts, researchers, and organizations for growth and exposure.
                    </p>
                </Card>
            </div>
        </div>

        <Bar backgroundColor="rgb(255, 255, 255)" imgPath="fumos.png">
            <h1 style={{textAlign:"center"}}>What We Do</h1>
            <p style={{fontSize:"1.2em"}}>
            The AIML Club hosts a variety of events and initiatives tailored to different levels of expertise.
            </p>

            <Link to="/Events" style={{textDecoration:"none", color:"white"}}>
                <Card backgroundColor="#304b5b" width="fit-content">
                    <h2>Check out our events here</h2>
                </Card>
            </Link>
        </Bar>
    

        <div style={{padding:"10px"}}>
            <h1 style={{textAlign:"center"}}>Join Us!</h1>

            <p style={{fontSize:"1.5em", textAlign:"center"}}>
                Open to all students. No prior experience is required!
            </p>
            <p style={{fontSize:"1.5em", textAlign:"center"}}>
                Visit our booth on <b>15 January 2025</b> to learn more about the club and its activities.
            </p>

            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <Link to="/idk" style={{textDecoration:"none", color:"white", display:"flex", justifyContent:"center"}}>
                <Card backgroundColor="#304b5b" width="fit-content">
                    <h2>Fill out the membership form here</h2>
                </Card>
            </Link>

            <Link to="/idk" style={{textDecoration:"none", color:"white", display:"flex", justifyContent:"center"}}>
                <Card backgroundColor="#304b5b" width="fit-content">
                    <h2>Chat in our discord server here</h2>
                </Card>
            </Link>
            </div>
            

            
        </div>
        
    </div>
}

export default Home;