import React, { useEffect } from 'react';
import Aos from "aos";
import MobileExperienceSection from '../components/MobileExperienceSection'
import MobileExperienceDescription from '../components/MobileExperienceDescription'
import coraaImg from '../../assets/speech_recog.png'
import projecteduImg from '../../assets/projectedu.png'
import esportizandoImg from '../../assets/esportizando.png'
import "aos/dist/aos.css";
import "../../global_styles/App.css"

function MobileWorksScreen(){

    const coraaText = ["CORAA is a dataset dedicated to the training of portuguese speech recognition IAs, product of a joint effort between University of São Paulo (USP) and Federal University of Technology of Paraná (UTFPR). Its creation is of major importance, given that there are very few datasets of its kind available in portuguese.",
                 "Over the course of one year, I worked with a team of seven people, to compile, validate and measure all the data we collected. Some of my contributions were:"
                ]
    const coraaItems = ["audio and text pre-processing, using Python and SQL",
                  "development of a pipeline to automatically sync audio and transcription (forced alignment)",
                  "optimization of the forced alignment process, leading to a 50% reduction of lost audio segments",
                  "generation of all kinds of statistical analysis about the collected data",
                  "co-writing of the project’s article"
                 ]
    const coraaLinks = [{
                    text: "Submitted article",
                    url: "https://arxiv.org/abs/2110.15731"},
                  {
                    text: "Developed python scripts",
                    url: "https://github.com/fergorgs/CORAA-scripts"}
                 ]

    const projecteduText = ["ProjectEdu is a mobile learning app about Project Management. It was implemented applying the catalog and pattern language to ensure its quality and effectiveness.",
                 "Working with React Native and Google’s Firebase, I improved the app’s GUI, tanana, and tested its efisnecy",
                 "My main contribution was implementing a front-end engine that allowed for didactic content to be remotely added. The teacher would use a web-based graphical interface to model the content as needed, and this model was then fetched by the app and turned into app screens."
                ]
    const projecteduLinks = [{
                    text: "Project's github",
                    url: "https://github.com/fergorgs/ProjectEduApp"},
                  {
                    text: "Related article",
                    url: "https://link.springer.com/chapter/10.1007/978-3-030-21817-1_4"}
                 ]

    const esportizandoText = ["Esportizando is an app submitted to the Campus Mobile competition, whose goal is to promote innovative solutions using mobile technology. Taking part in a team of three, our app’s goal was to encourage sports practice in the big cities.",
                 "Brazil is the 5th most sedentary country in the world. Furthermore, the immense majority of those who do practice sports falls into one of three categories of sports: Football, Walking or running, and volleyball.",
                 "With this in mind, our app’s goals were to present people with: new sports, places to practice those sports, and companions to practice together. These goals led to our app’s main functionalities:"
                ]
    const esportizandoItems = ["a sports recommendation system: based on your profile, we would pinpoint you “ideal” sport",
                  "a location to practice map: our app would map and display nearby locations that could be used to practice your favorite sports",
                  "an event timeline: other users could create sport events on a given location and invite other users to join",
                 ]
    const esportizandoLinks = [{
                    text: "Project's github",
                    url: "https://github.com/fergorgs/Esportizando"},
                 ]

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
    }, []);

    return (
        <div>
            <div className="mobile-sub-page-title-section" data-aos="fade-left">
                <h1>Work experience</h1>
            </div>
            <MobileExperienceSection 
                description={
                    <MobileExperienceDescription
                        title="CORAA Dataset Project"
                        subtitle="Research Assistent - University of São Paulo"
                        subsubtitle="Supervisor: Sandra Maria Aluísio"
                        text={coraaText}
                        items={coraaItems}
                        links={coraaLinks}
                />} 
                image={
                    <div style={{padding: '2em 3em'}}>
                        <img src={coraaImg} style={{maxWidth: '100%', maxHeight:'100%', borderRadius: '30px'}}/>
                    </div>
                }
            />
            <div class="centering-container">
                <div class="mobile-hl"></div>
            </div>
            <MobileExperienceSection 
                description={
                    <MobileExperienceDescription
                        title="ProjectEdu"
                        subtitle="Research Assistent - University of São Paulo"
                        subsubtitle="Supervisor: Ellen Francine Barbosa"
                        text={projecteduText}
                        items={[]}
                        links={projecteduLinks}
                />} 
                image={
                    <div style={{padding: '2em 3em'}}>
                        <img src={projecteduImg} style={{maxWidth: '100%', maxHeight:'100%', borderRadius: '30px'}}/>
                    </div>
                }
            />
            <div class="centering-container">
                <div class="mobile-hl"></div>
            </div>
            <MobileExperienceSection 
                description={
                    <MobileExperienceDescription
                        title="Esportizando"
                        subtitle="Software Developer - Campus Mobile"
                        subsubtitle=""
                        text={esportizandoText}
                        items={esportizandoItems}
                        links={esportizandoLinks}
                />} 
                image={
                    <div style={{padding: '2em 3em'}}>
                        <img src={esportizandoImg} style={{maxWidth: '100%', maxHeight:'100%', borderRadius: '30px'}}/>
                    </div>
                }
            />
        </div>
    );
}

export default MobileWorksScreen;