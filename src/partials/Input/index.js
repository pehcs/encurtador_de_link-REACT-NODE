import React, { useState, useContext } from "react";
import "./style.css";
import Button from "../../components/Button";
import axios from "axios";
import { ButtonContext } from './ButtonContextProvider'

function ShortLinkComponent(props) {
  const [selectedButton, setSelected] = useContext(ButtonContext)
  
  return (
    <div
      className="container-shortlink"
    >
      <span className="link-grandao">{props.original}</span>
      <div>
        <a className="shortlinkUiui" target="_blank" href={props.shorted}>
          {props.shorted}
        </a>
        <Button
          onClick={() => {
            setSelected(props.shorted)
            navigator.clipboard.writeText(props.shorted);
          }}
          styled={`quase-small br8 ${selectedButton===props.shorted ? "copied" : ""}`}
        >
          {selectedButton===props.shorted ? "Copied!" : "Copy"}
        </Button>
      </div>
    </div>
  );
}

function Input() {
  const [stateInput, setStateInput] = useState("");
  const [active, setActive] = useState(false);
  const [currentLinks, setCurrentLinks] = useState([]);
  const [selectedButton, setSelectButton] = useState("")

  function callAPI(url) {
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response) => {
        const { full_short_link: shortLink, original_link: originalLink } =
          response.data.result;

        setCurrentLinks([...currentLinks, { shortLink, originalLink }]);
      });
  }
 
  return (
    <div className="container-main">
      <div className="design-entrada  container">
        <div className="container-input">
          <input
            name="linkOriginal"
            onChange={(e) => {
              setStateInput(e.target.value);
            }}
            type="text"
            value={stateInput}
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
            if (stateInput === "") {
              setActive(true);
            } else {
              setActive(false);
              setStateInput("");
              callAPI(stateInput);
            }
          }}
        >
          Shorten It!
        </Button>
      </div>
      <ButtonContext.Provider value={[selectedButton, setSelectButton]}>
      {currentLinks.map((element, index) => {
        return (
          <ShortLinkComponent
          key={index}
          original={element.originalLink}
          shorted={element.shortLink}
          ></ShortLinkComponent>
          );
        })}
      </ButtonContext.Provider>
    </div>
  );
}

export default Input;
