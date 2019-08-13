import React from 'react';
import './App.css';
import { KeypadContext } from './contexts/KeypadContext';
import Keypad from './components/Keypad';
import Display from './components/Display';
import { digitreducer } from './reducers/digitreducer';

const initialState = {digit: []};

function App() {
  const [displayDigit, dispatch] = React.useReducer(digitreducer, initialState);
  // console.log('%cdisplayDigit from the useReducer', 'color:red;', displayDigit);

  return (
    <div className="App">
      <KeypadContext.Provider value={{digits: [1,2,3,4,5,6,7,8,9,0], displayDigit, dispatch}}>
          <Display />
          <Keypad/>
      </KeypadContext.Provider>
    </div>
  );
}

export default App;
