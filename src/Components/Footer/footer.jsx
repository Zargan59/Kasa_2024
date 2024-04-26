import React from "react"
import LogoWhite from "../../Assets/LOGO_White.png"
import "../../Style/footer.scss"

function footer(){
    return(
        <div className="footer">
            <img src={LogoWhite} alt="Logo de Kasa" />
        </div>
    )
}

export default footer