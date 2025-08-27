import { useState, useEffect } from 'react';
import '../../styles/screens/ProjectsScreen.css'
import '../../styles/App.css'
import ProjectItem from './components/ProjectItem';
import ScreenTitle from '../common/ScreenTitle';
import Aos from "aos";
import "aos/dist/aos.css";

function ProjectsScreen() {
    const [projectItems, setProjectItems] = useState([]);

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
        fetch('/content_data/projects_screen.json')
            .then(res => res.json())
            .then(data => {
                setProjectItems(data.projectItems)
            });
    }, []);

    return (
        <div id="projects-section" class="light-theme">
            {/* <div data-aos="fade-in"> */}
                <ScreenTitle text="Projects"/>
            {/* </div> */}
            {projectItems.map((item, _) => (
                <ProjectItem item={item} />
            ))}
        </div>
    );
}

export default ProjectsScreen;