import React from 'react';

const validation = (props) => {
    let validationMessage = 0;

    if (props.inputLength < 0) {
        validationMessage = 'Something went wrong';
    } else if (props.inputLength > 0 && props.inputLength < 5 ) {
        validationMessage = 'Text too short';
    } else if (props.inputLength >= 5) {
        validationMessage = 'Text long enough';
    } else {
        validationMessage = 'Please write down a text';
    }

    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;