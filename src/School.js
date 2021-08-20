import React from 'react'
import {useState, useEffect} from 'react';
import "./App.css";
import schoolImg from "./images/scotty.png";
import "./School.css";
import { MdKeyboardArrowDown } from 'react-icons/md';
import Arrow from "./Arrow";

const courses = [
    "11485 Intro to Deep Learning",
    "15441 Computer Networks",
    "18330 Computer Security",
    "15251 Great Theoretical Ideas in Computer Science",
    "15213/18213 Computer Systems",
    "15210 Parallel and Sequential Data Structures and Algorithms",
    "11411/11611 Natural Language Processing",
    "15122 Principles of Imperative Computation",
    "15150 Principles of Functional Programming",
    "15112 Fundamentals of Programming and CS",

    "21259 Calculus in 3 Dimensions",
    "36225 Probability Theory",
    "18202 ECE Math (Linear Algebra & Differential Equations)",
    "21127 Concepts of Mathematics (Discrete Mathematics)",
    "21122 Integration and Approximation",
    "18100 Introduction to Electrical and Computer Engineering",

    "33142 Physics II",
    "33141 Physics I",
    "70332 Business, Society & Ethics",
    "18200 ECE Sophomore Seminar",
    "24203 Intro to Manual CNC",
    "85241 Social Psychology",
    "24101 Fundamentals of Mechanical Engineering",
    "76101 Interpretation and Argument",
    "76270 Writing for Professions",
]
const limits = [10, 16, 25];
export default function School() {
    const [count, setCount] = useState(0);
    const [buttonName, setButtonName] = useState("See More")
    const incrementCount = () => {
        setCount(count => {
            if (count == 2) {
                return 0;
            } else {
                return count+1;
            }
        });
    }
    useEffect(() => {
        if (count == 2) {
            setButtonName("Collapse");
        } else {
            setButtonName("See More");
        }
    }, [count]);
    return (
        <div className="school">
            <div className="school__title">
                <h1 className="school__title__text">Courses</h1>
                <img src={schoolImg} alt="Scotty Dog" width="200"/>
            </div>
            
            <div className="school__courses">
                <ul style={{width: "35vw", marginLeft: "5vw"}}>
                    {courses.map((s, i) => {
                        if (i % 2 === 0 && i < limits[count]) {
                            if (i < limits[0]) {
                                return (<li><p className="school__courses__bullet"><b>{s}</b></p></li>)
                            }
                            return (<li><p className="school__courses__bullet">{s}</p></li>); 
                        };
                    })}
                </ul>
                <ul style={{width: "35vw"}}>
                    {courses.map((s, i) => {
                        if (i % 2 === 1 && i < limits[count]) {
                            if (i < limits[0]) {
                                return (<li><p className="school__courses__bullet"><b>{s}</b></p></li>)
                            }
                            return (<li><p className="school__courses__bullet">{s}</p></li>);                        
                        };
                    })}
                </ul>
            </div>
            <Arrow count={count} incrementCount={incrementCount}/>
        </div>
    )
}
