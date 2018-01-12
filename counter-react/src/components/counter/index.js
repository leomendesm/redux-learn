import React from 'react'


const Counter = ({counter, decrement, increment, removeCounter}) => (
  <div style={{position: 'relative'}}>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    <button style={{fontSize: 10, position: 'absolute', right: 0, top: 0}} onClick={removeCounter}>&times;</button>
  </div>
)


export default Counter
