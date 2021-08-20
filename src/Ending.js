import React from 'react'
import "./App.css";
import "./Ending.css";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
export default function Ending() {
    return (
        <div className="ending">
            <h1>Thanks for reading!</h1>
            <br/>
            <br/>
            <h3 style={{color: "#666666"}}>For More</h3>
            <div className="ending__icons">
                <a href="https://github.com/jessechancy"><FaGithub size={40} className="icon"/></a>
                <a href="https://www.linkedin.com/in/jessechancy/"><FaLinkedinIn size={40} className="icon"/></a>
            </div>
            <p>I'm looking for job opportunities and any interesting projects to work on.
                If you would like contact me, my email is <b>jessechanwork@gmail.com</b></p>
        </div>
    )
}
