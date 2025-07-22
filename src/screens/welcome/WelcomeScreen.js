import React, { useState, useEffect } from 'react';
import { useScreenSize, SCREEN_SIZE } from '../../utils/useScreenSize';
import '../../styles/screens/WelcomeScreen.css'
import HeroText from './components/HeroText';
import Picture from '../common/Picture';
import profileImg from '../../assets/profile_img.jpeg'
import Aos from "aos";
import "aos/dist/aos.css";

function WelcomeScreen() {
    const [heroTitle, setHeroTitle] = useState('');
    const [heroItems, setHeroItems] = useState([]);
    const screenSize = useScreenSize();

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
        fetch('/content_data/welcome_screen.json')
            .then(res => res.json())
            .then(data => {
                setHeroItems(data.heroItems)
                setHeroTitle(data.heroTitle)
            });
    }, []);

    return (
        <div id="title-section">
            {screenSize === SCREEN_SIZE.DESKTOP ? (
                <>
                    <div data-aos="fade-left">
                        <HeroText title={heroTitle} items={heroItems}/>
                    </div>
                    <div data-aos="fade-in">
                        <Picture containerCssClass={"profile-img-container"} imageCssClass={"profile-img"} image={profileImg}/>
                    </div>
                </>
            ) : (
                <>
                    <div data-aos="fade-in">
                        <Picture containerCssClass={"profile-img-container"} imageCssClass={"profile-img"} image={profileImg}/>
                    </div>
                    <div data-aos="fade-left">
                        <HeroText title={heroTitle} items={heroItems}/>
                    </div>
                </>
            )}
        </div>
    );
}

export default WelcomeScreen;