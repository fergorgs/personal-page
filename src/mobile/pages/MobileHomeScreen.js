import React, { useEffect } from 'react';
import Aos from "aos";
import MoviePreviewCard from "../components/MobilePreviewCard"
import "aos/dist/aos.css";
import '../styles/MobileHomeScreen.css'
import profileImg from '../../assets/profile_img.jpeg'

function MobileHomeScreen(){

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
    }, []);

    return(
        <div>
            <div id="mobile-title-section">
                <div id="mobile-profile-img-container" data-aos="fade">
                    <img id="mobile-profile-img" src={profileImg}/>
                </div>
                <div id="mobile-name-title-container" data-aos="fade-left">
                    <h1>Hey there! I'm Fernando</h1>
                    <h3>Computer Science student at University of São Paulo (USP)</h3>
                </div>
            </div>
            <div id="mobile-about-section" data-aos="fade-up">
                <h2>About me</h2>
                <p>
                    I'm a computer science student in my final year at University of São Paulo 
                    (best university in Latin America). I have great experience in software engineering and mobile development, 
                    and also have great interest in the field of neural networks. Commitment and excellence are two of my core 
                    beliefs, and guide my work on every new challenge I take.
                </p>
            </div>
            <div class="centering-container">
                <div class="mobile-hl"></div>
            </div>
            <div data-aos="fade-up">       
                <MoviePreviewCard 
                    title="Experience" 
                    text="I've helped as a research assistent on two major projects:"
                    items={[
                        "Most recently, I took part on the creation of a portuguese speech recognition dataset using Python and SQL.", 
                        "Before that, I developed a mobile learning app about Project Management using React Native and Google's Firebase",
                        "I also developed a mobile app for the nation wide Campus Mobile competition, using React Native, Node.js and MongoDB"
                    ]}
                    toPath="/work"
                />
            </div>
            <div class="centering-container">
                <div class="mobile-hl"></div>
            </div>
            <div data-aos="fade-up">
                <MoviePreviewCard 
                    title="Personal projects" 
                    text="I have developed a great variety of projects, such as:"
                    items={[
                        "A Java based currency converter that uses live exchange rates",
                        "A flutter app that fetches and displays details about a variety of movies",
                        "This website!"
                    ]}
                    toPath="/projects"
                />
            </div>
        </div>
    );
}

export default MobileHomeScreen;