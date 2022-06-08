import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaLinkedin,FaGithub } from "react-icons/fa";
import '../styles/ContactScreen.css'
import profileImg from '../../assets/profile_img.jpeg'

function ContactScreen(){

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
    }, []);

    return (
        <div>
            <div className="sub-page-title-section" data-aos="fade-left">
                <h1>Contact</h1>
            </div>
            <div className="list" data-aos="fade-up">
                <div id="contact-screen-photo-strip">
                    <div id="profile-img-container">
                        <img id="profile-img" src={profileImg}></img>
                    </div>
                    <div id="contact-screen-text-container">
                        <div id="contact-screen-text">
                            I currently live in São Carlos, Brazil. You can contact me via email or Linkedin.
                            Check out my Github also!
                        </div>
                    </div>
                </div>

                <div>
                    <div id="contact-info-item" onClick={() => {window.location.href = 'https://linkedin.com/in/fernando-fayet/';}}>
                        <div id="contact-img-container">
                            <FaLinkedin/>
                        </div>
                        <div id="contact-info-item-text-container">
                            <div id="contact-info-item-text">
                                Linkedin: linkedin.com/in/fernando-fayet/
                            </div>
                        </div>
                    </div>
                    <div id="contact-info-item" onClick={() => {window.location.href = 'https://www.github.com/fergorgs';}}>
                        <div id="contact-img-container">
                            <FaGithub/>
                        </div>
                        <div id="contact-info-item-text-container">
                            <div id="contact-info-item-text">
                                Github: github.com/fergorgs
                            </div>
                        </div>
                    </div>
                    <a href="mailto:fer.fayet@gmail.com" style={{textDecoration: 'none'}}>
                        <div id="contact-info-item">
                            <div id="contact-img-container">
                                <FaEnvelope/>
                            </div>
                            <div id="contact-info-item-text-container">
                                <div id="contact-info-item-text">
                                    Email: fer.fayet@gmail.com
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactScreen;