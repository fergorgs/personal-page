import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaLinkedin,FaGithub } from "react-icons/fa";
import '../styles/MobileContactScreen.css'
import profileImg from '../../assets/profile_img.jpeg'

function MobileContactScreen(){

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
    }, []);

    return (
        <div>
            <div className="mobile-sub-page-title-section" data-aos="fade-left">
                <h1>Contact</h1>
            </div>
            <div className="list" data-aos="fade-up">
                <img id="mobile-contact-screen-profile-img" src={profileImg}/>
                <div id="mobile-about-section" data-aos="fade-up">
                    <p>
                        I currently live in São Carlos, Brazil. You can contact me via email or Linkedin.
                        Check out my Github also!
                    </p>
                </div>

                <div id="mobile-contact-info-item" onClick={() => {window.location.href = 'https://linkedin.com/in/fernando-fayet/';}}>
                    <div id="contact-img-container">
                        <FaLinkedin/>
                    </div>
                    <div id="contact-info-item-text-container">
                        <div id="mobile-contact-info-item-text">
                            linkedin.com/in/fernando-fayet/
                        </div>
                    </div>
                </div>
                <div id="mobile-contact-info-item" onClick={() => {window.location.href = 'https://www.github.com/fergorgs';}}>
                    <div id="contact-img-container">
                        <FaGithub/>
                    </div>
                    <div id="contact-info-item-text-container">
                        <div id="mobile-contact-info-item-text">
                            github.com/fergorgs
                        </div>
                    </div>
                </div>
                <a href="mailto:fer.fayet@gmail.com" style={{textDecoration: 'none'}}>
                    <div id="mobile-contact-info-item">
                        <div id="contact-img-container">
                            <FaEnvelope/>
                        </div>
                        <div id="contact-info-item-text-container">
                            <div id="mobile-contact-info-item-text">
                                fer.fayet@gmail.com
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default MobileContactScreen;