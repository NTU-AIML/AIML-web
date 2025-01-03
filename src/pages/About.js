
function AboutCard({bgCol, children}){
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

function About(){
    return <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"0px", margin:"0px"}}>
        <h1 style={{width:"100%", textAlign:"left"}}>
            About
        </h1>

        <AboutCard bgCol="white">
        <p style={{fontSize:"1.2em"}}>
            Email: [Insert email]
        </p>
        <p style={{fontSize:"1.2em"}}>
            Website: [Insert links]
        </p>
        <p style={{fontSize:"1.2em"}}>
            Instagram: [Insert links]
        </p>
        </AboutCard>
        
    </div>
}

export default About;