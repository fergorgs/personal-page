import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../../styles/Footer.css';

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-content">
                <span>Contact: </span>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/fernando-fayet/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/fergorgs" target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub
                    </a>
                    <a href="mailto:fer.fayet@gmail.com">
                        <FaEnvelope /> Email
                </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;