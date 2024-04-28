import React from "react";
import Navbar from '../Components/Header/navBar'
import Banner from '../Components/Header/banner'
import Footer from "../Components/Footer/footer.jsx"
import '../Style/main.css'

function About(){
    return(
        <div>
            <Navbar />
            <main>
                <Banner />
            </main>
            <Footer />
        </div>
    )
}

export default About