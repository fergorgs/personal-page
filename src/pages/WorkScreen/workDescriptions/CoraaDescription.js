import React from 'react';

function CoraaDescription(){

    const contributions = ["audio and text pre-processing, using Python and SQL",
                "development of a pipeline to automatically sync audio and transcription (forced alignment)",
                "optimization of the forced alignment process, leading to a 50% reduction of lost audio segments",
                "generation of all kinds of statistical analysis about the collected data",
                "co-writing of the project’s article"
                ]

    const relevantLinks = [["Submitted article", "https://arxiv.org/abs/2110.15731"],
                     ["Developed python scripts", "https://github.com/fergorgs/CORAA-scripts"]
                    ]

    const contributionsList = contributions.map((contribution) => {

        return (
            <div className="item-container">
                <p>•</p>
                <p className="description">{contribution}</p>
            </div>
        )
    });

    const relevantLinksList = relevantLinks.map((relevantLink) => {

        return (
            <div class="about-button long-button" onClick={() => {window.location.href = relevantLink[1]; }}>
                <h4>{relevantLink[0]}</h4>
            </div>
        )
    });

    return(
        <div class="project-description">
            <h2>CORAA Dataset Project</h2>
            <h3>Research Assistent - University of São Paulo</h3>
            <h4>Supervisor: Sandra Maria Aluísio</h4>

            <div class="project-description-text">
                <p>CORAA is a dataset dedicated to the training of portuguese speech recognition IAs, 
                    product of a joint effort between University of São Paulo (USP) and Federal University
                    of Technology of Paraná (UTFPR). Its creation is of major importance, given that 
                    there are very few datasets of its kind available in portuguese.</p>

                <p>Over the course of one year, I worked with a team of seven people, to compile, validate 
                    and measure all the data we collected. Some of my contributions were:</p>

                {contributionsList}
            </div>

            <h3>Relevant Links:</h3>

            {relevantLinksList}
        </div>
    )
}

export default CoraaDescription;