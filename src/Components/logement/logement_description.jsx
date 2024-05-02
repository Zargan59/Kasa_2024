import "../../Style/main.css"

function logementDescription(props){
 return(
        <div className="logementTitleLocation">
            <h1 className="logementTitle"> {props.title} </h1>
            <p className="logementLocation"> {props.location} </p>
        </div>
 )   
}

export default logementDescription