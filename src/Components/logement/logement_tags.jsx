export default function tag(props){
    return(
        <ul className="logementTag">
            {props.tags.map((tag,index)=>{
                return(
                    <li className="tag" key={index}> {tag} </li>
                )
            })
            }
        </ul>
    )
}