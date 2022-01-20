<<<<<<< HEAD
import React from 'react';
import './styles.css';
=======
import './styles.css'
import React from 'react'
>>>>>>> cb3ad374537f951dd60a4d24bd8b43bcc8101c21

export default function Button(props){
    return(
        <button className={props.styled} id="btn">{props.children}</button>
    )
}
