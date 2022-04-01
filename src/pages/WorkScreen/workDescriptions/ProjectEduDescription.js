import React from 'react';

function ProjectEduDescription(){

    const relevantLinks = [["Project's github", "https://github.com/fergorgs/ProjectEduApp"],
                     ["Related article", "https://link.springer.com/chapter/10.1007/978-3-030-21817-1_4"]
                    ]

    const relevantLinksList = relevantLinks.map((relevantLink) => {

        return (
            <div class="about-button long-button" onClick={() => {window.location.href = relevantLink[1]; }}>
                <h4>{relevantLink[0]}</h4>
            </div>
        )
    });

    return(
        <div class="project-description">
            <h2>ProjectEdu</h2>
            <h3>Research Assistent - University of São Paulo</h3>
            <h4>Supervisor: Ellen Francine Barbosa</h4>
            
            <div class="project-description-text">
                <p>ProjectEdu is a mobile learning app about Project Management. It was implemented applying 
                    the catalog and pattern language to ensure its quality and effectiveness.</p>

                <p>Working with React Native and Google’s Firebase, I improved the app’s GUI, 
                    tanana, and tested its efisnecy</p>

                <p>My main contribution was implementing a front-end engine that allowed for didactic content 
                    to be remotely added. The teacher would use a web-based graphical interface to model the 
                    content as needed, and this model was then fetched by the app and turned into app screens.</p>
            </div>

            <h3>Relevant Links:</h3>

            {relevantLinksList}
        </div>
    )
}

export default ProjectEduDescription;