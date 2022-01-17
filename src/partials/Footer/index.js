import React from "react";
import './style.css'

function Button(){
    return(
        <button className='getButton'><b>Get Started</b></button>
    )
}

function Footer(){
    return(
        <div id="main">
            <div className="getLink">
                <Button></Button>
            </div>
            <div>

            </div>
        </div>

    )
}


export default Footer;