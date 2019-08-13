import React from 'react';
import './App.css';
import { KeypadContext } from './contexts/KeypadContext';
import Keypad from './components/Keypad';
import Display from './components/Display';


function App() {
  return (
    <div className="App">
      <KeypadContext.Provider value={[1,2,3,4,5,6,7,8,9,0]}>
          <Display />
          <Keypad/>
      </KeypadContext.Provider>
    </div>
  );
}

export default App;
