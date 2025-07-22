import React, { useState, useEffect } from 'react';
import { useScreenSize, SCREEN_SIZE } from '../../../utils/useScreenSize';
import '../../../styles/screens/WelcomeScreen.css'

function HeroText({ title, items }) {

    return (
        <div id="name-title-container">
            <h1>{title}</h1>
            <br />
            {items.map((item, index) => (
                <h3 key={index}>{item}</h3>
            ))}
        </div>
    );
}

export default HeroText;