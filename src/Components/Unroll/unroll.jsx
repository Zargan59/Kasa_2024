import arrow from "../../Assets/Arrow.png"
import { useState } from "react";
import "../../Style/main.css";

function Unroll(props){
    const [toggle, setToggle] = useState(true)

    const toggleState = () => {setToggle(!toggle)}

    
    if( props.origin === "About"){
        
        return(
            <section className="aboutKasa">
                <div className="unrollMe unrollMe_maxWidth">
                    <div onClick={toggleState} className="unrollMe_content">
                        <p>{props.title}</p>
                        <img src={arrow} alt="" className={toggle && "active"} />
                    </div>
                    <div className={`unrolled ${toggle ? "hidden":""}`}>
                        <p> {props.description} </p>
                    </div>
                </div>
            </section>
        )
    }
    else{
        return(
            <div>
                <h1>Pas About</h1>
            </div>
        )
    }
}

export default Unroll