import React from 'react';
import { Link } from "react-router-dom";
import '../styles/NavBar.css'

function NavBar(props){

    return (
        <div id="nav-bar-container">
            <div id="nav-bar">
                <nav>
                    <Link className="nav-bar-button" to={props.toPaths[0]} style={{textDecoration: 'none'}}>
                        <p>Home</p>
                    </Link>
                    <div class="vl"></div>
                    <Link className="nav-bar-button" to={props.toPaths[1]} style={{textDecoration: 'none'}}>
                        <p>Work</p>
                    </Link>
                    <div class="vl"></div>
                    <Link className="nav-bar-button" to={props.toPaths[2]} style={{textDecoration: 'none'}}>
                        <p>Projects</p>
                    </Link>
                    <div class="vl"></div>
                    <Link className="nav-bar-button" to={props.toPaths[3]} style={{textDecoration: 'none'}}>
                        <p>Contact</p>
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;