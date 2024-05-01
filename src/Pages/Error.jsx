import Navbar from "../Components/Header/navBar"
import "../Style/main.css"
import { NavLink } from "react-router-dom" 
import Footer from "../Components/Footer/footer"

function Error(){
    return(
        <div>
             <Navbar />
             <section className="error">
                <div className="errorContent">
                    <h1 className="error_404">404</h1>
                    <p className="error_message">Oups! La page que vous demandez n'existe pas.  </p>
                <NavLink className='return' to='/'> Retourner à la page d'acceuil </NavLink>
                </div>
             </section>
             <Footer />
        </div>
    )
}

export default Error