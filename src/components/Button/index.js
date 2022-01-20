import React from 'react';
import './styles.css';

export default function Button(props){
    return(
        <button {...props} className={props.styled} id="btn">{props.children}</button>
    )
}
