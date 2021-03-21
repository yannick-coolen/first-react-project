import React from 'react';
import './Input.css';


const input = (props) => {
    return (
        <div className="Input">
            <label>{props.label}</label>
            <br />
            <input type="text" name={props.label}/>        
        </div>
    )  
};

export default input;