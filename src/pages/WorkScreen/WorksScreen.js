import React, { useEffect } from 'react';
import Aos from "aos";
import ExperienceSection from '../../components/ExperienceSection'
import CoraaDescription from './workDescriptions/CoraaDescription'
import ProjectEduDescription from './workDescriptions/ProjectEduDescription'
import EsportizandoDescription from './workDescriptions/EsportizandoDescription'
import coraaImg from '../../assets/speech_recog.png'
import projectedu from '../../assets/projectedu.png'
import esportizando from '../../assets/esportizando.png'
import "aos/dist/aos.css";
import "../../styles/App.css"

function WorksScreen(){

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
    }, []);

    return (
        <div>
            <div className="sub-page-title-section" data-aos="fade-left">
                <h1>Work experience</h1>
            </div>
            <ExperienceSection 
                leftComponent={<CoraaDescription/>} 
                rightComponent={
                    <div style={{padding: '2em'}}>
                        <img src={coraaImg} style={{maxWidth: '100%', maxHeight:'100%', borderRadius: '30px'}}/>
                    </div>
                }
                leftPercent={0.55}
                fadeUp={true}
            />
            <ExperienceSection 
                leftComponent={
                    <div style={{padding: '2em'}}>
                        <img src={projectedu} style={{maxWidth: '100%', maxHeight:'100%'}}/>
                    </div>
                }
                rightComponent={<ProjectEduDescription/>}
                leftPercent={0.45}
                fadeUp={true}
            />
            <ExperienceSection 
                leftComponent={<EsportizandoDescription/>}
                rightComponent={
                    <div style={{padding: '2em'}}>
                        <img src={esportizando} style={{maxWidth: '100%', maxHeight:'100%'}}/>
                    </div>
                }
                leftPercent={0.55}
                fadeUp={true}
            />
        </div>
    );
}

export default WorksScreen;