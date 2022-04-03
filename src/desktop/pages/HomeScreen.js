import React, { useEffect } from 'react';
import Aos from "aos";
import PreviewCard from "../components/PreviewCard"
import "aos/dist/aos.css";
import '../styles/HomeScreen.css'

function HomeScreen(){

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
    }, []);

    return(
        <div>
            <div id="title-section">
                <div id="name-title-container" data-aos="fade-left">
                    <h1>ey there! I'm Fernando</h1>
                    <h3>Computer Science student at University of São Paulo (USP)</h3>
                </div>
                <div id="profile-img-container" data-aos="fade">
                    <img id="profile-img" src="https://media-exp1.licdn.com/dms/image/C4D03AQG1nkpPVPZunw/profile-displayphoto-shrink_800_800/0/1631645863743?e=1654128000&v=beta&t=YEtZdNocgTBMCgbIQTMxgdwwIvNOdAvO5LjLqdm1uvA"/>
                </div>
            </div>
            <div class="centering-container">
                <div id="about-section" data-aos="fade-up">
                    <h3>About me</h3>
                    <p>
                        I'm a computer science student in my final year at University of São Paulo 
                        (best university in Latin America). I have great experience in software engineering and mobile development, 
                        and also have great interest in the field of neural networks. Commitment and excellence are two of my core 
                        beliefs, and guide my work on every new challenge I take.
                    </p>
                </div>
            </div>
            <div class="centering-container">
                <div class="hl"></div>
            </div>
            <div id="preview-section-container">
                <div id="previews-section">
                    <div style={{width: '33em'}} data-aos="fade-up">       
                        <PreviewCard 
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
                    <div class="vl"></div>
                    <div style={{width: '33em'}} data-aos="fade-up">
                        <PreviewCard 
                            title="Personal projects" 
                            text="I have developed a great variety of projects, such as:"
                            items={[
                                "A Java based currency converter that uses live exchange rates",
                                "A flutter app that fetches and displays details about a variety of movies",
                                "This website!"
                            ]}
                            toPath="/projects"
                            style={{width: '33em'}}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeScreen;