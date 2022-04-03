import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/ExperienceSection.css"

function ExperienceSection(props) {

    const baseWidth = 1000
    const leftWidth = props.leftPercent ? props.leftPercent*baseWidth : 0.5*baseWidth;
    const rightWidth = baseWidth-leftWidth

    const fadeType = props.fadeUp ? "fade-up" : ""

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
    }, []);

    return(
        <div class="project-section">
            <div class="project-section-column project-section-column-left" data-aos={fadeType}>
                <div class="project-section-container" style={{width: leftWidth.toString() + 'px'}}>
                    {props.leftComponent}
                </div>
            </div>
            <div class="vl"></div>
            <div class="project-section-column" data-aos={fadeType}>
                <div class="project-section-container" style={{width: rightWidth.toString() + 'px'}}>
                    {props.rightComponent}
                </div>
            </div>
        </div>
    );
}

export default ExperienceSection;