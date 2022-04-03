import React from 'react';
import { Link } from "react-router-dom";
import { FaRegLightbulb } from "react-icons/fa";
import "../styles/MobilePreviewCard.css"

function MobilePreviewCard(props){

    const listItems = props.items.map((itemText) => {


        return (
            <div className="mobile-item-container">
                <p>•</p>
                <p className="description">{itemText}</p>
            </div>
        )
    });

    return(
        <div className="mobile-preview-card">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            {listItems}
            <nav>
                <Link to={props.toPath} style={{textDecoration: 'none'}}>
                    <div class="mobile-about-button">
                        <FaRegLightbulb/>
                        <h4>Know more...</h4>
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default MobilePreviewCard;