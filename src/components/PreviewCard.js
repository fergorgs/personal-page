import React from 'react';
import { Link } from "react-router-dom";
import { FaRegLightbulb } from "react-icons/fa";
import "../styles/PreviewCard.css"

function PreviewCard(props){

    const listItems = props.items.map((itemText) => {


        return (
            <div className="item-container">
                <p>•</p>
                <p className="description">{itemText}</p>
            </div>
        )
        // return <p>• {itemText}</p>
    });

    return(
        <div class="preview-card">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            {listItems}
            <nav>
                <Link to={props.toPath} style={{textDecoration: 'none'}}>
                    <div class="about-button">
                        <FaRegLightbulb/>
                        <h4>Know more...</h4>
                    </div>
                </Link>
            </nav>
        </div>
    )
}

export default PreviewCard;