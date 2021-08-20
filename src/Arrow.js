import React from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

export default function Arrow(props) {
    if (props.count < 2) {
        return (
            <div>
                <MdKeyboardArrowDown onClick={props.incrementCount} size={30}/>
            </div>
        ) 
    } else {
        return (
            <div>
                <MdKeyboardArrowUp onClick={props.incrementCount} size={30}/>
            </div>
        )
    }
    
}
