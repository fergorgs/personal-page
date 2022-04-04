import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import '../styles/MobileProjectCard.css'

function MobileProjectCard(props){

    const tags = props.tags ? props.tags : []
    const tagList = tags.map((tag) => {

        return(
            <ProjectCardTag text={tag}/>
        );
    });

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
    }, []);

    return(
        <div className="mobile-project-card" data-aos="fade-up">
            <h3>{props.title}</h3>
            <div className="mobile-project-card-tags-strip">
                {tagList}
            </div>
            <p>{props.text}</p>
            <div className="about-button" onClick={() => {window.location.href = props.toPath; }}>
                <h4>Go to Github...</h4>
            </div>
        </div>
    );
}

function ProjectCardTag(props){

    return(
        <div className="project-card-tag">
            {props.text}
        </div>
    )
}

export default MobileProjectCard;