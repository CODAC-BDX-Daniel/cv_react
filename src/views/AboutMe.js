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
                <h1>Profil</h1>
                <p>
                    Ancien Acheteur dans l'industrie, ma passion pour le monde du numérique m'a amené à
                    entamer ma reconversion professionnelle dans le
                    Développement Web. <br/>
                    Je recherche actuellement un stage de 4 à 6 mois(React JS, NODE JS MONGO DB).<br/>
                    Je m'intéresse particulièrement aux technologies basées sur Javascript (Typescript, React JS, Redux,
                    NextJs,
                    Node JS, MongoDB, ExpressJS, Nest JS et React Native) <br/>

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
            <div>
                <h1>Stack technique</h1>
                <p>Html5</p>
                <p>Css3</p>
                <p>Vanilla Javascript</p>
            </div>
        </div>
    );
};

export default AboutMe;