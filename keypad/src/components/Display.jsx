import React from 'react';
import { KeypadContext } from '../contexts/KeypadContext';

function Display() {
    const { digit } = React.useContext(KeypadContext).displayDigit;

    return (
        <div id="display">
            <div className="digit">{digit[0] && digit[0]}</div>
            <div className="digit">{digit[1] && digit[1]}</div>
            <div className="digit">{digit[2] && digit[2]}</div>
            <div className="digit">{digit[3] && digit[3]}</div>
            <div className="digit">{digit[4] && digit[4]}</div>
            <div className="digit">{digit[5] && digit[5]}</div>
        </div>
    )
}

export default Display;
