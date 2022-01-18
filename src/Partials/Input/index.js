import React from "react";
import "./style.css";
import Button from "../../components/Button"

function Input() {
        return (
            <div className="design-entrada">
                <input name="linkOriginal" type="text" placeholder="Shorten a link here..." className="container-entrada"/>
                <Button styled="br5 big">Shorten It!</Button>
            </div>

        );
}

export default Input;