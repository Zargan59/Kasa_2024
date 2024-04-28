import React from 'react'
import Navbar from '../Components/Header/navBar'
import Banner from '../Components/Header/banner'
import Footer from "../Components/Footer/footer.jsx"
import Card from '../Components/Card/card.jsx'
import '../Style/main.css'


function Home(){
    return(
        <div>
            <Navbar />
            <main>
                <Banner origin = "Home" />
                <Card />
            </main>
            <Footer />
        </div>
    )
}

export default Home