import React from 'react';

const ProjectWidgets = () => {
    return (
        <div className="portfolio_card">
            <div className='carroussel_container'>
                <img src='/images/cibler_logo.png'/>
                <img src='/images/toulouse2_logo.png'/>
                <img src='/images/codingAcademy_logo.png'/>
            </div>
            <div className='experience_info'>
                <a href='https://marvelous-heroes.netlify.app/'>
                    <h3>Widgets </h3>
                    <p>https://marvelous-heroes.netlify.app/</p>
                </a>
                <h4>Front-End</h4>
                <p>React JS</p>
                <h4>Back-End</h4>
                <p>Nest JS</p>
                <h4>Fonctionnalités</h4>

            </div>

        </div>
    );
};

export default ProjectWidgets;