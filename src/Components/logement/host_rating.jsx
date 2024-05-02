import redStar from "../../Assets/Star/redStar.png"
import greyStar from "../../Assets/Star/greyStar.png"

export default function hostRate(props){
    const {rate, maxScore} = props
    const stars  = []
    for(let i=1; i <= maxScore; i++){
        if (i <=rate){
            stars.push(<img key={i} className="redStar star" src ={redStar} alt="Active star" />)
        }
        else {
            stars.push( <img key={i} className="greyStar star" src ={greyStar} alt="non-active star" />)
        }
    }
    return(
        <div className="rate">
            {stars}
        </div>
    )
}