import React from "react"
import "./style.css"

export default function Nav () {
    return(
        <nav className="navbar">
            <ul>
                <a><li id="logo"></li></a>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Resources</a></li>
            </ul>

            <ul>
                <li><button id="login">Login</button></li>
                <li><button>Sign up</button></li>
            </ul>
        </nav>
    )
}


