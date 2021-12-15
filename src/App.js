import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, show } from './action';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogger = useSelector(state => state. isLogger)
  const dispatch = useDispatch();
  return (
    <div className="App" >
          <h1> Counter : {counter} </h1>
          <button onClick={ () => dispatch(increment())}> + </button>
          <button onClick={ () => dispatch(decrement())}> - </button>
          <button onClick={ () => dispatch(show())}>Show</button>
        
          {isLogger ? <h1> show </h1> : ''}
    </div>
  );
}

export default App;
