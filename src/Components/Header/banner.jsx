import React from "react";


function banner(props){
    if (props.origin === 'Home'){
        return(
            <div className="banner bannerHome">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            )
        }
        else{
            return(
                <div className="banner bannerAlernativ">
                    
                </div>
            )
        }
    }

export default banner