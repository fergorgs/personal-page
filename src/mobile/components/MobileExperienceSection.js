import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import MobileExperienceDescription from './MobileExperienceDescription'
import "../styles/MobileExperienceSection.css"

function MobileExperienceSection(props) {

    const baseWidth = 1000
    const leftWidth = props.leftPercent ? props.leftPercent*baseWidth : 0.5*baseWidth;
    const rightWidth = baseWidth-leftWidth

    const fadeType = props.fadeUp ? "fade-up" : ""

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
    }, []);

    return(
        <div class="mobile-project-section" data-aos="fade-up">
            {props.image}
            {props.description}
        </div>
    );
}

export default MobileExperienceSection;