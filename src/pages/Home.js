import { Link } from "react-router-dom";

function Home(){
    return <div>
        This is Home

        <h1>What the club is about and goals</h1>
        
        <Link to="/Events"><h1>Check out our upcoming events</h1></Link>
        
        <h1>How to contact and join the club</h1>
    </div>
}

export default Home;