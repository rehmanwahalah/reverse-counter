import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [seconds, setSeconds] = useState(NaN);
  const [inputVal, setInputVal] = useState(0);
  const [countDownClass, setCountDownClass] = useState('count-down-div')

  useEffect(() => {
    if (seconds > 0) {
      if(inputVal % 2 === 0) {
        if(seconds === inputVal/2) {
          setCountDownClass('count-down-half-div')
        } else if(seconds === inputVal/3) {
          setCountDownClass('count-down-quater-div')
        }
      } else if(inputVal % 2 === 1) {
        console.log( Math.round(inputVal/3), '##')
        if(seconds ===  Math.round(inputVal/2)) {
          setCountDownClass('count-down-half-div')
        } else if(seconds === Math.round(inputVal/3)) {
          setCountDownClass('count-down-quater-div')
        }
      }
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else setCountDownClass('count-down-end-div')
  },[seconds]);

  const startCountDown = () => {
    setCountDownClass('count-down-div')
    setSeconds(inputVal)
  }
  const onInputChange = (e) => {
    setInputVal(e.target.value)
  }
  
  return (
    <div className="App">
      <h2>Reverse Counter</h2>
      <p>Enter number and hit start button to start reverse counter</p>
      <div className="inputwithbutton">
        <label>Enter Number</label>
        <input onChange={onInputChange} type="number"></input>
        <button onClick={startCountDown}>Start</button>
      </div>
      <div className={countDownClass}>
        {seconds}
      </div>
    </div>
  );
}

export default App;
