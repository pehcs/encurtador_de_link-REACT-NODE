import React from "react"
import "./style.css"
import logo from "../../assets/logo.svg"

export default function Nav () {
    return(
        <nav className="navbar">
            <ul>
                <li><a><img id="logo" src={logo}/></a></li>
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


