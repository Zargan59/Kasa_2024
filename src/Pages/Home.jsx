import React from 'react'
import Navbar from '../Components/Header/navBar'
import Banner from '../Components/Header/banner'
import Footer from "../Components/Footer/footer"
import '../Style/main.css'

function Home(){
    return(
        <div>
            <Navbar />
            <main>
                
                <Banner origin = "Home" />
            </main>
            <Footer />
        </div>
    )
}

export default Home