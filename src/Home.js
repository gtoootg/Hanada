import React, {useState} from "react";
import { Link } from "react-router-dom";


const Home = () =>{

    const [count,setCount] = useState(0)

    return(
        <>
          <div>Home</div>
          <hr/>
          <Link to="/dummy">dummy</Link>
          <hr/>
          <button onClick={()=>setCount(count +1)}> +1 </button>
          <button onClick={()=>setCount(count -1)}> -1 </button>
          count:{count}   
        </>
            )
}

export default Home