import React from 'react';

function EsportizandoDescription(){

    const functionalities = ["a sports recommendation system: based on your profile, we would pinpoint you “ideal” sport",
                "a location to practice map: our app would map and display nearby locations that could be used to practice your favorite sports",
                "an event timeline: other users could create sport events on a given location and invite other users to join",
                ]

    const relevantLinks = [["Project's github", "https://github.com/fergorgs/Esportizando"]]

    const functionalitiesList = functionalities.map((functionality) => {
        return (
            <div className="item-container">
                <p>•</p>
                <p className="description">{functionality}</p>
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
            <h2>Esportizando</h2>
            <h3>Software Developer - Campus Mobile</h3>

            <div class="project-description-text">
                <p>Esportizando is an app submitted to the Campus Mobile competition, whose goal is to promote 
                    innovative solutions using mobile technology. Taking part in a team of three, our app’s goal 
                    was to encourage sports practice in the big cities.</p>

                <p>Brazil is the 5th most sedentary country in the world. Furthermore, the immense majority of 
                    those who do practice sports falls into one of three categories of sports: Football, Walking 
                    or running, and volleyball.</p>

                <p>With this in mind, our app’s goals were to present people with: new sports, places to practice 
                those sports, and companions to practice together. These goals led to our app’s main functionalities:</p>

                {functionalitiesList}
            </div>

            <h3>Relevant Links:</h3>

            {relevantLinksList}
        </div>
    )
}

export default EsportizandoDescription;