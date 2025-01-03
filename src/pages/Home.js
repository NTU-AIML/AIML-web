import { Link } from "react-router-dom";

function HomeCard({bgCol, children}){
    return <div style={{
        width:"100%",
        backgroundColor:bgCol,
        // borderRadius:"10px",
        alignItems:"center",
        margin:"8px",
        padding:"10px",
        boxShadow:"1px 4px 4px rgba(0, 0, 0, 0.5)",
    }}>
        {children}
    </div>
}

function Home(){
    return <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"0px", margin:"0px"}}>


        <h1 style={{
            width:"100%",
            textAlign:"center",
            backgroundColor:"rgba(255,255,255,1)",
            background:`url(${process.env.PUBLIC_URL}/background.jpg)`,
        }}>
            <p>NTU Artificial Intelligence & Machine Learning Club</p>
        </h1>

        <HomeCard bgCol="rgb(255, 255, 255)">
            <h1>What is AIML Club?</h1>

            <p style={{fontSize:"1.2em"}}>
                The AIML Club is a vibrant community for enthusiasts and learners passionate about Artificial Intelligence and Machine Learning. Our mission is to foster an environment where creativity meets technology, enabling members to explore, learn, and innovate in AI and ML.
                Our goals include:
                <ul>
                    <li>Education: Offering resources and opportunities to learn about AI/ML concepts, tools, and techniques.</li>
                    <li>Collaboration: Bringing together like-minded individuals to work on cutting-edge projects.</li>
                    <li>Innovation: Encouraging the development of impactful solutions to real-world problems using AI/ML.</li>
                    <li>Networking: Connecting members with industry experts, researchers, and organizations for growth and exposure.</li>
                </ul>
                Whether you’re a beginner eager to learn or an expert looking to share your knowledge, the AIML Club is the place for you.
            </p>
        </HomeCard>


        <HomeCard bgCol="rgb(255, 255, 255)">
            <h1>What do we do?</h1>
            <p style={{fontSize:"1.2em"}}>
            The AIML Club hosts a variety of events and initiatives tailored to different levels of expertise.
            </p>
            <Link to="/Events" style={{textDecoration:"none"}}>
                    <h2 style={{
                    width:"fit-content",
                    border:"5px solid",
                    borderColor:"#304b5b",
                    borderRadius:"20px",
                    padding:"10px",
                    color:"#304b5b",
                    }}>Check out our upcoming events here</h2>
            </Link>
        </HomeCard>
    

        <HomeCard bgCol="rgb(255,255,255)">
            <h1>Join Us!</h1>
            <p style={{fontSize:"1.2em"}}>
                Open to all students. No prior experience is required!
            </p>
            <p style={{fontSize:"1.2em"}}>
                Fill out our online membership form: [Insert link to form].
            </p>
            <p style={{fontSize:"1.2em"}}>
                Discord server: [discord link].
            </p>
            <p style={{fontSize:"1.2em"}}>
                Visit our booth on 15 January 2025 to learn more about the club and its activities.
            </p>
            
        </HomeCard>
        
    </div>
}

export default Home;