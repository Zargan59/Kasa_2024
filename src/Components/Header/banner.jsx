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
                <div>
                <h2>Not Hello</h2>
            </div>
            )
        }
    }

export default banner