import React from 'react';
import {digitreducer} from '../reducers/digitreducer';
import {KeypadContext} from '../contexts/KeypadContext';

function Digit(props) {
    const context = React.useContext(KeypadContext);

    return (
        <button onClick={() => context.dispatch({ type:"DIGIT", digit: props.digit })}>{props.digit}</button>
    )
}

export default Digit;
