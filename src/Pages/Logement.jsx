import { useParams } from "react-router-dom"
import Navbar from "../Components/Header/navBar"
import Carrousel from "../Components/Carrousel/carrousel"
import LogementDescription from "../Components/logement/logement_description"
import LogementTag from "../Components/logement/logement_tags"
import HostInfos from "../Components/logement/host_infos"
import HostRating from "../Components/logement/host_rating"
import Footer from "../Components/Footer/footer"
import Unroll from "../Components/Unroll/unroll"

import "../Style/main.css"

import logements from "../JSON/logement.json"


function Logement(){
    const {id} = useParams()
    const data = logements.find((item)=>item.id === id)
    console.log(data);
    return(
        <div>
            <Navbar />

            <Carrousel images = {data.pictures} />
            <section className="logementInfos">
                <div className="logementContent">
                    <div className="logementInfosDescription">
                        <LogementDescription title = {data.title} location = {data.location} />
                        <LogementTag tags = {data.tags} />
                    </div>
                    <div className="hostInfo">
                        <HostInfos name= {data.host}/>
                        <HostRating rate = {data.rating} maxScore = "5" />
                    </div>
                </div>
                <div className="Unroll_LogementInfos">
                    <Unroll origin = "Info" title = "Description" description = {data.description} />
                    <Unroll origin = "Info" title = "Equipement" description = {data.equipments} />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Logement