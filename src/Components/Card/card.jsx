import { NavLink } from "react-router-dom"

function card(){
    const annonces = require ("../../JSON/logement.json")
    return(
        <section className="cards">
            {annonces.map((element)=>(
                <NavLink to = {"logement/"+element.id} key={element.id} className={'links'}>
                    <div className="card">
                            <img src={element.cover} alt={element.description} className="card_img"/>
                            <p className="card_text">{ element.title}</p>
                    </div>
                </NavLink>
            ))}
        </section>
    )
}

export default card