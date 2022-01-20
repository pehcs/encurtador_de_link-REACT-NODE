import React from "react";
import "./style.css"
import Button from "../../components/Button";
import ilust from "../../assets/illustration-working.svg"

export default function Banner(){
    return(
        <section className="banner">
            <div className="banner-container">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <Button styled="br50 bigGet" >Get Started</Button>
            </div>
            <img id="ilust" src={ilust}/>
            
        </section>
    )
}
