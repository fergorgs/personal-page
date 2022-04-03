import React from 'react';
import { Link } from "react-router-dom";
import { FaRegLightbulb } from "react-icons/fa";
import "../styles/MobileExperienceDescription.css"

function MobileExperienceDescription(props){

    const descriptionText = props.text.map((parag) => {

        return (
            <p>{parag}</p>
        )
    })

    const listItems = props.items.map((itemText) => {
        
        return (
            <div className="experience-description-item-container">
                <p>•</p>
                <p className="description">{itemText}</p>
            </div>
        )
    });

    const linksList = props.links.map((relevantLink) => {

        return (
            <div class="mobile-about-button mobile-long-button" onClick={() => {window.location.href = relevantLink.url; }}>
                <h4>{relevantLink.text}</h4>
            </div>
        )
    });

    return(
        <div className="mobile-experience-description">
            <h3>{props.title}</h3>
            <h4>{props.subtitle}</h4>
            <h5>{props.subsubtitle}</h5>
            {descriptionText}
            {listItems}
            <div style={{height: '1em'}}></div>
            <h4>Relevant Links:</h4>
            <div className="mobile-experience-links">
                {linksList}
            </div>
        </div>
    )
}

export default MobileExperienceDescription;