import arrow from "../../Assets/Arrow.png"
import { useState } from "react";
import "../../Style/main.css";



function Unroll(props){

    function CollapseContent(){
        const content = props.description
        if(typeof content ==='string'){
          return(<p className='collapse_texte'>{content} </p>)
        }else{
          return(
            <ul className='collapse_ul'>
              {content.map((item,index) =>(
                <li className='collapse_li'key={index} >{item} </li>
              ))}
            </ul>
          ) }}

    const [toggle, setToggle] = useState(true)

    const toggleState = () => {setToggle(!toggle)}

    
    if( props.origin === "About"){
        
        return(
            <section className="aboutKasa">
                <div className="unrollMe unrollMe_maxWidth">
                    <div onClick={toggleState} className="unrollMe_content">
                        <p>{props.title}</p>
                        <img src={arrow} alt="Unroll" className={toggle? "":"active"} />
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
            <section className="logementUnroll">
                <div className="unrollMe unrollMe_minWidth">
                    <div onClick={toggleState} className="unrollMe_content">
                        <p>{props.title}</p>
                        <img src={arrow} alt="Unroll" className={toggle? "":"active"} />
                    </div>
                    <div className={`unrolled ${toggle ? "hidden":""}`}>
                        {CollapseContent()}
                    </div>
                </div>
            </section>
        )
    }
}

export default Unroll