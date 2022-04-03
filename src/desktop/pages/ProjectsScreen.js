import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectCard from '../components/ProjectCard';

function ProjectsScreen(){

    useEffect(() => {
        Aos.init({duration: 2000, once: true});
    }, []);

    return (
        <div>
            <div className="sub-page-title-section" data-aos="fade-left">
                <h1>Personal projects</h1>
            </div>

            <div class="list">
                <ProjectCard 
                    title="Pet shop website"
                    tags={['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB']}
                    text="A complete pet shop website developed as part of a web dev assignment. Customers can 
                    search for products, add and remove items to their shopping cards, create and edit a profile, 
                    add pets to their profile, and book pet shop appointments for their pets. Front-end was developed 
                    using React. Back-end uses Node and Express.js, and MongoDB to store users’ data"
                    toPath="https://github.com/fergorgs/WebProject"
                    fadeUp={true}
                />
                <ProjectCard 
                    title="Currency Converter"
                    tags={['Java']}
                    text="A small Java project created so I could improve my Java skills. It uses live exchange 
                    rates to convert between currencies"
                    toPath="https://github.com/fergorgs/Currency-Converter"
                    fadeUp={true}
                />
                <ProjectCard 
                    title="Movie Info App"
                    tags={['Flutter', 'Dart']}
                    text="An app created to practice my Flutter skills. It displays data fetched from a REST API 
                    about 20 famous movies from the last decades. You can scroll through the movies list, filter
                     by genre, and select a movie to see more details. The app uses an MVC architecture, and has
                      proper error handling and cache management"
                    toPath="https://github.com/fergorgs/Movie-Info-App"
                    fadeUp={true}
                />
                <ProjectCard 
                    title="This website!"
                    tags={['React', 'HTML', 'CSS', 'JavaScript']}
                    text="This website was developed using React. It is a space where I can share my personal 
                    achievements! Its source code is also available at github"
                    toPath="https://github.com/fergorgs/Personal-Website"
                    fadeUp={true}
                />
            </div>
        </div>
    );
}

export default ProjectsScreen;