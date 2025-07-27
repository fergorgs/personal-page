import { useEffect } from 'react';
import ItemDescription from '../../common/ItemDescription';
import DivisionLine from '../../common/DivisionLine';
import Aos from "aos";
import "aos/dist/aos.css";


function ProjectItem({ item }) {

     useEffect(() => {
            Aos.init({duration: 2000, once: true});
        }, []);

    return (
        <>
        <div class="project-item-container">
            <div class="item-description-container">
                <div data-aos="fade-up">
                <ItemDescription 
                    title={item.job_title}  
                    tags={item.technologies}
                    overview={item.overview}
                    relevantLinks={item.relevant_links}
                />
                </div>
            </div>
        </div>
        <DivisionLine orientation="HORIZONTAL" lineStyle="solid" color="gray" lineWidthInPixels="2px"/>
        </>
    );
}

export default ProjectItem;