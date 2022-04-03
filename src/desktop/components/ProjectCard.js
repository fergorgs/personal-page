import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import '../styles/ProjectCard.css'

function ProjectCard(props){

    const tags = props.tags ? props.tags : []
    const tagList = tags.map((tag) => {

        return(
            <ProjectCardTag text={tag}/>
        );
    });

    const fadeType = props.fadeUp ? "fade-up" : ""

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
    }, []);

    return(
        <div class="project-card" data-aos={fadeType}>
            <div class="project-card-title">
                {props.title}
            </div>
            <div class="project-card-tags-strip">
                {tagList}
            </div>
            <div class="project-card-description">
                {props.text}
            </div>
            <div class="about-button" onClick={() => {window.location.href = props.toPath; }}>
                <h4>Go to Github...</h4>
            </div>
        </div>
    );
}

function ProjectCardTag(props){

    return(
        <div class="project-card-tag">
            {props.text}
        </div>
    )
}

export default ProjectCard;