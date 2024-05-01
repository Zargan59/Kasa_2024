import React from "react";
import Navbar from '../Components/Header/navBar'
import Banner from '../Components/Header/banner'
import Footer from "../Components/Footer/footer.jsx"
import Unroll from "../Components/Unroll/unroll.jsx"
import '../Style/main.css'
import AboutInfos from "../JSON/about.json"

function About(){

    return(
        <div>
            <Navbar />
            <main>
                <Banner />
                <section className="about">
                {AboutInfos.map((text, index)=>(
                    <Unroll origin ="About" About title = {text.title} key ={index} description ={text.description} />
                ))}
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default About