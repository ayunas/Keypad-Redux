import React from 'react';
import {digitreducer} from '../reducers/digitreducer';
import {KeypadContext} from '../contexts/KeypadContext';
import UIfx from 'uifx';
import tickAudio from '../assets/clickSebastian.mp3';



function Digit(props) {
    const context = React.useContext(KeypadContext);
    const tick = new UIfx({
        asset: tickAudio,
        volume: 1.0
    })

    return (
        <button onClick={() => {
            tick.play();
            context.dispatch({ type:"DIGIT", digit: props.digit })
        }}>{props.digit}</button>
    )
}

export default Digit;
