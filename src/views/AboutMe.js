import React from 'react';
import WebDevExp from "../components/WebDevExp";
import BuyerExp from "../components/BuyerExp";
import Reacteur from "../components/Reacteur";
import CodingAcademy from "../components/CodingAcademy";
import KedgeBs from "../components/KedgeBs";
import MasterUniv from "../components/MasterUniv";

const AboutMe = () => {
    return (
        <div className='aboutMe_container'>
            <div>
                <div className='download_resume'>
                    {/*<button>ME CONTACTER</button>*/}
                    <button><a href='/CV_Joel_RAZAFINJATOVO.pdf' download>TELECHARGER MON CV</a></button>
                </div>
                <h1>Profil</h1>
                <p className='intro'>
                    Ancien Acheteur dans l'industrie, ma passion pour le monde du numérique m'a amené à
                    entamer ma reconversion professionnelle dans le
                    Développement Web. <br/>
                    Dans le cadre de ma formation au sein de la CODING ACADEMY EPITECH, je recherche un stage de 4 à 6
                    mois en tant que Développeur Front-End ou Fullstack pouvant démarrer à compter du 1er mars. <br/>Je
                    m'intéresse particulièrement aux technologies basées autour de Javascript (Typescript, React JS,
                    Redux,
                    NextJs,
                    Node JS, MongoDB, ExpressJS, Nest JS et React Native). <br/>
                    Vous trouverez à travers ce site les informations relatives à mon parcours ainsi que les projets que
                    j'ai développés. <br/> <span> Bonne visite et à bientôt!<img src='/images/smiley.png' style={{width:'20px',marginLeft:'5px', position:'relative', top: '3px'}}/></span>
                </p>
            </div>
            <div>
                <h1>Expériences Professionnelles</h1>
                <WebDevExp/>
                <BuyerExp/>
            </div>
            <div>
                <h1>Formation</h1>
                <CodingAcademy/>
                <Reacteur/>
                <KedgeBs/>
                <MasterUniv/>
            </div>
        </div>
    );
};

export default AboutMe;