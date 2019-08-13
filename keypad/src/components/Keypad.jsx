import React from 'react';
import Digit from './Digit';
import {KeypadContext} from '../contexts/KeypadContext';

function Keypad() {
    const digits = React.useContext(KeypadContext).digits;
    
    return (
        <>
            {digits.map( digit => <Digit digit={digit}/> )}
        </>
    )
}

export default Keypad;
