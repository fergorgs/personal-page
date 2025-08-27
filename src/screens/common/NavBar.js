import React, { useState, useEffect } from 'react';
import '../../styles/NavBar.css';

function NavBar(props){
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        if (isMobile) {
            setIsDrawerOpen(false);
        }
    };
    
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Initial check
        checkIfMobile();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    return (
        <div id="nav-bar-container">
            <div id="nav-bar" className={isDrawerOpen ? 'drawer-open' : ''}>
                {isMobile && (
                    <div className="hamburger-menu" onClick={toggleDrawer}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
                <nav className={isMobile ? 'mobile-nav' : ''}>
                    <button onClick={() => scrollToSection('title-section')}>Home</button>
                    <button onClick={() => scrollToSection('work-section')}>Work</button>
                    <button onClick={() => scrollToSection('education-section')}>Education</button>
                    <button onClick={() => scrollToSection('projects-section')}>Projects</button>
                    <button onClick={() => scrollToSection('contact-section')}>Contact</button>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;