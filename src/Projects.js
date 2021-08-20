import React from 'react'
import "./App.css";
import "./Projects.css";
import PortablePoker from "./images/portablepoker.png";
import Bittle from "./images/bittle.jpeg";
import SyntaxTree from "./images/syntaxtree.png";
import HKIME from "./images/hkime.png";
import Labs from "./images/15213labs.png";
import MovieAssist from "./images/movieassist.gif";
import DrumAR from "./images/drumar.gif";
import RaspPi from "./images/rasppi.png";
export default function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects__list">
                <div className="projects__container">
                    <img className="projects__container__img" src={PortablePoker} height={240}></img>        
                    <h1 className="projects__container__text">Portable Poker</h1>  
                </div>
                <div className="projects__container">
                    <img className="projects__container__img" src={Bittle} height={240}></img>        
                    <h1 className="projects__container__text">Bittle</h1> 
                </div>
                <div className="projects__container">
                    <img className="projects__container__img" src={SyntaxTree} height={240}></img>        
                    <h1 className="projects__container__text">Question Answering</h1> 
                </div>
                <div className="projects__container">
                    <img className="projects__container__img" src={HKIME} height={240}></img>        
                    <h1 className="projects__container__text">Cantonese Input Method</h1> 
                </div>
                <div className="projects__container">
                    <img className="projects__container__img" src={Labs} height={240}></img>        
                    <h1 className="projects__container__text">Computer Systems Labs</h1> 
                </div>
                <div className="projects__container">
                    <img className="projects__container__img" src={MovieAssist} height={240}></img>        
                    <h1 className="projects__container__text">MovieAssist</h1> 
                </div>
                <div className="projects__container">
                    <img className="projects__container__img" src={DrumAR} height={240}></img>        
                    <h1 className="projects__container__text">Drum AR</h1> 
                </div>
                <div className="projects__container">
                    <img className="projects__container__img" src={RaspPi} height={240}></img>        
                    <h1 className="projects__container__text">RaspberryPi<br/>Alexa</h1> 
                </div>
            </div>
        </div>
        
    )
}
