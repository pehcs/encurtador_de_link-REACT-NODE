import React, { useState } from "react";
import "./style.css";
import Button from "../../components/Button";

function ShortLinkComponent(props){
    return(
        <div className="container-shortlink">
            <span>tesgreger</span>
            <div>
                <a>shortLinkComponent</a> 
                <Button styled="br5 small">Copy</Button>
            </div>
        </div>
    )
}

function Input() {
  const [stateInput, setStateInput] = useState("");
  const [active, setActive] = useState(false);

  return (
      <div className="container-main">
    <div className="design-entrada">
      <div className="container-input">
        <input
          name="linkOriginal"
          onChange={(e) => {
            setStateInput(e.target.value);
          }}
          type="text"
          placeholder="Shorten a link here..."
          className={(active ? "activeInput" : "") + " container-entrada"}
        />
        <span className={(active ? "active" : "") + " span-alert"}>
          Please Add a link
        </span>
      </div>
      <Button
        styled="br5 big"
        onClick={() => {
            console.log(stateInput)
          if (stateInput === "") {
            setActive(true);
          }else{
              setActive(false)
          }
        }}
      >
        Shorten It!
      </Button>
    </div>
    <ShortLinkComponent/>
    </div>
  );
}

export default Input;
