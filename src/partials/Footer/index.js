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
                <h2 className="boost"><b>Boost your links today</b></h2>
                <button>Botão provisório</button>
                {/*<img src={wavesFooter} alt='teste'></img>  teste*/}
            </div>
            <div className="footer">
                <div className="logo">
                    <h1 className="boost">Shortly</h1>
                    
                </div>
                <div className="info1">
                    <h4 className="boost">Features</h4>
                    <br></br>
                    <p className="infoDesc">
                        Link Shortening <br></br> 
                        Branded Links <br></br> 
                        Analytics
                    </p>
                </div>
                <div className="info2">
                    <h4 className="boost">Resources</h4>
                    <br></br>
                    <p className="infoDesc">
                        Blog  <br></br> 
                        Developers <br></br> 
                        Support
                    </p>
                </div>
                <div className="info3">
                    <h4 className="boost">Company</h4>
                    <br></br>
                    <p className="infoDesc">
                        About <br></br> 
                        Our Team <br></br> 
                        Carreers <br></br> 
                        Contact 
                    </p>
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