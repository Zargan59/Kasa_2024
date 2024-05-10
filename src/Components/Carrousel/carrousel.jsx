import "../../Style/main.css"
import { useState } from "react";
import arrow from "../../Assets/navArrow.png"

export default function Carrousel(props){
    const [currentSlide, setCurrentSlide] = useState(0)
    const imageArray = props.images.flatMap(e=> e.images).length

    function NextImage(){
        let newImage = currentSlide ===  imageArray -1 ? 0 : currentSlide +1;
        setCurrentSlide(newImage)
    }
    function PreviousImage(){
        let newImage = currentSlide === 0 ? imageArray -1 : currentSlide -1;
        setCurrentSlide(newImage)
    }

    return(
        <section className="carrouselContent">
            <div className="arrowContent">
                <img src={arrow} alt="leftArrow" className="leftArrow" onClick={()=> PreviousImage()} />
                <img src={arrow} alt="rightArrow" className="rightArrow" onClick={()=> NextImage()} />
            </div>
            {props.images.map((picture, index)=>{
                return(
                    <img src={picture} alt="Logement de l'hôte" key={index} className={index === currentSlide ? "carrouselCurrentImg":"hidde_img"} />
                )
            })}
        </section>
    )
}