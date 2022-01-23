import React from 'react';

const ProjectMarvel = () => {
    return (
        <div className="portfolio_card">
            <div>
                <img alt='marvel' src='/images/marvel1.png'/>
            </div>
            <div className='experience_info'>
                <a href='https://marvelous-heroes.netlify.app/'>
                    <h3>Marvel </h3>
                    <p>https://marvelous-heroes.netlify.app/</p>
                </a>
                <h4>Front-End:</h4>
                <p>React JS</p>
                <h4>Back-End:</h4>
                <p>API tiers</p>
                <h4>Fonctionnalités:</h4>
                <p>Requêtes API</p>
                <p>Affichage de personnages</p>
                <p>Affichage des détails relatifs à un personnage</p>
                <p>Barre de recherche de personnage</p>
                <p>Affichage de comics</p>
                <p>Ajout de personnage dans la liste des favoris</p>
                <a href='https://github.com/Razafinjatovo-dev/Marvelous-frontend' target='_blank' rel='noreferrer' alt='marvel_repo'><h4>Voir Github</h4></a>
            </div>
        </div>
    );
};

export default ProjectMarvel;