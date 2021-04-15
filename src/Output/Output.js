import React from 'react';
import './Output.scss';

const output = (props) => {
    return (
        <div className="Output">
            <p>Output: <br />{props.userInput} </p>
        </div>
    );
};

export default output;