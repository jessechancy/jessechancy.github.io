import React from 'react'
import "./App.css"
import "./Work.css"
export default function Work() {
    return (
        <div className="work">
            <div className="work__container">
                <h1>Internships</h1>
                <div className="work__container__small"> 
                    <h2>Petoi</h2>
                    <p className="work__company_description">Developer of robot dog STEM toy</p>
                </div>
                <div className="work__container__small"> 
                    <h2>SeekOut</h2>
                    <p className="work__company_description">Platform for talent search and recruitment</p>
                </div>
                <div className="work__container__small"> 
                    <h2>Clobotics</h2>
                    <p className="work__company_description">Computer vision company focused on retail and windmill blade inspection</p>
                </div>
                <div className="work__container__small"> 
                    <h2>Hong Kong University of Science and Technology</h2>
                    <p className="work__company_description">Research Lab in Computer Science Department</p>
                </div>
                <div className="work__container__small"> 
                    <h2>MEMSDrive</h2>
                    <p className="work__company_description">Research and production of OIS/EIS MEMS device</p>
                </div>


            </div>
            <div className="work__container">
                <h1>Teaching</h1>
                <div className="work__container__small"> 
                    <h2>Paragon</h2>
                    <p className="work__company_description">Python training for highschool students and corporations.</p>
                </div>
                <div className="work__container__small"> 
                    <h2>Teaching Assistant</h2>
                    <p className="work__company_description">TA for 15-112 Fundamentals of Programming and CS</p>
                </div>
            </div>
        </div>
    )
}
