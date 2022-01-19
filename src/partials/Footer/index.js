import React from "react";
import './style.css'
import iconFacebook from '../../assets/iconFacebook.svg'
import iconPinterest from '../../assets/iconPinterest.svg'
import iconInstagram from '../../assets/iconInstagram.svg'
import iconTwitter from '../../assets/iconTwitter.svg'
import wavesFooter from '../../assets/wavesFooter.svg'

function Button(){
    return(
        <button className='getButton'><b>Get Started</b></button>
    )
}

function Footer(){
    return(
        <div id="main">
            <div className="link">
                <h2 className="boost-link"><b>Boost your links today</b></h2>
                <button>Botão provisório</button>
                {/*<img src={wavesFooter} alt='teste'></img>  teste*/}
            </div>
            <div className="footer">
                <div className="logo">
                    <h1 className="boost">Shortly</h1>
                    
                </div>
                <div className="info1">
                    <h4 className="boost">Features</h4>
                    <p className="info-desc">Link Shortening </p>
                    <p className="info-desc">Branded Links </p>
                    <p className="info-desc">Analytics</p>
                </div>
                <div className="info2">
                    <h4 className="boost">Resources</h4>
                    <p className="info-desc">Blog</p>
                    <p className="info-desc">Developers</p>
                    <p className="info-desc">Support</p>
                </div>
                <div className="info3">
                    <h4 className="boost">Company</h4>
                    <p className="info-desc">About </p>
                    <p className="info-desc">Our Team </p>
                    <p className="info-desc">Carreers </p>
                    <p className="info-desc">Contact </p>
                </div>
                <div className="info4">
                    <img className="socialMedia" src={iconFacebook} alt="facebook icon" width={20} height={20}></img>
                    <img className="socialMedia" src={iconTwitter}  alt='Twitter icon'width={20} height={20}></img>
                    <img className="socialMedia" src={iconPinterest} alt='Pinterest icon'  width={20} height={20}></img>
                    <img className="socialMedia" src={iconInstagram}  alt='Instagram icon'width={20} height={20}></img>
                </div>
            </div>
        </div>
    )
}


export default Footer;