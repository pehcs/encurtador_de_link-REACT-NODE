import React, { useState } from "react";
import "./style.css";
import Button from "../../components/Button";
import axios from "axios";

function ShortLinkComponent(props) {
  return (
    <div className="container-shortlink">
      <span>{props.original}</span>
      <div>
        <a target="_blank" href={props.shorted}>
          {props.shorted}
        </a>
        <Button styled="br5 small">Copy</Button>
      </div>
    </div>
  );
}

function Input() {
  const [stateInput, setStateInput] = useState("");
  const [active, setActive] = useState(false);
  const [currentLinks, setCurrentLinks] = useState([]);

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
      <div className="design-entrada">
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
      {currentLinks.map((element, index) => {
        return (
          <ShortLinkComponent
            key={index}
            original={element.originalLink}
            shorted={element.shortLink}
          ></ShortLinkComponent>
        );
      })}
    </div>
  );
}

export default Input;
