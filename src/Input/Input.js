import React from 'react';
import './Input.scss';

const input = (props) => {
    return (
        <div className="Input">
            <label>Write down your text</label>
            <br />
            <input 
            type="text" 
            onChange={props.changed} 
            />
        </div>
    );  
};

export default input;