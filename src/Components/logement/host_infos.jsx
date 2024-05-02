export default function hostInfos(props){
    return(
        <div className="hostPresentation">
            <div className="hostName">
                <p>{props.name.name} </p>
            </div>
                <img className="hostPicture" src={props.name.picture} alt="" />
        </div>
    )
}