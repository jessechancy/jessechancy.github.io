import React from 'react'
import "./App.css";
import MeImage from "./images/me.png";
import Resume from "./2021_08_02.pdf";
export default function Heading() {
    return (
        <div className="heading">
            <div className="heading__text">
                <h1>Hi! I'm Jesse</h1>
                <h2>I develop backend systems and machine learning models.</h2>
                <p className="heading__intro">I was born in Hong Kong, moved to Shanghai when I was 7, and came to the U.S. for college, studying <b>computer science at Carnegie Mellon University</b>. 
                <br/><br/>I have <b>1+ years experience</b> interning as a software developer at SeekOut and Clobotics. 
                I was also a TA for 15-112 Fundamentals of CS and subsequently started my own python summer camp called Paragon.
                I love learning about new technologies and new startups, and I enjoy creating useful and well-crafted software products.</p>
                <a href={Resume} class="button primary icon solid fa-download" download>My Resume</a>
            </div>
            <img src={MeImage} alt={"An image of me."} width="400" style={{margin: "0 50"}}/>
        </div>
    )
}
