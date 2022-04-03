import React from 'react';
import { FaEnvelope, FaLinkedin,FaGithub } from "react-icons/fa";
import '../styles/Footer.css'

function Footer(){

    return(
        <div id="footer">
            <div id="contact-info-item-text-container">
                <div id="contact-info-item-text">
                    Contact: 
                </div>
            </div>
            <div style={{width: '1.7em'}}></div>
            <div id="contact-info-item" onClick={() => {window.location.href = 'https://www.linkedin.com/in/fernando-fayet/'; }}>
                <div id="contact-img-container">
                    <FaLinkedin color="white"/>
                </div>
                <div id="contact-info-item-text-container">
                    <div id="contact-info-item-text">
                        Linkedin
                    </div>
                </div>
            </div>
            <div id="contact-info-item" onClick={() => {window.location.href = 'https://www.github.com/fergorgs'; }}>
                <div id="contact-img-container">
                    <FaGithub color="white"/>
                </div>
                <div id="contact-info-item-text-container">
                    <div id="contact-info-item-text">
                        Github
                    </div>
                </div>
            </div>
            <a href="mailto:fer.fayet@gmail.com" style={{textDecoration: 'none'}}>
                <div id="contact-info-item">
                    <div id="contact-img-container">
                        <FaEnvelope color="white"/>
                    </div>
                    <div id="contact-info-item-text-container">
                        <div id="contact-info-item-text">
                            Email
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Footer;