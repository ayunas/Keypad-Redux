import React from 'react';
import { KeypadContext } from '../contexts/KeypadContext';

function Display() {
    const keypadContext = React.useContext(KeypadContext);
    // console.log('%ckeypadContext in Display', 'color:green;', keypadContext);

    return (
        <div id="display">
            {/* {keypadContext.displayDigit.map( digit => <div className="digit">{digit}</div>)} */}
            <div className="digit">{keypadContext.displayDigit.digit}</div>
        </div>
    )
}

export default Display;
