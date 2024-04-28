import React from "react"
import LogoWhite from "../../Assets/LOGO_White.png"
import "../../Style/footer.scss"

function footer(){
    return(
        <div className="footer">
            <img src={LogoWhite} alt="Logo de Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default footer