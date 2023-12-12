// Filename - App.js

import React, { useState } from "react"
import Factorial from "./Factorial"

function App() {
	const [number, setNumber] = useState(0)
	const squaredNum = squareNum(number)
	const [counter, setCounter] = useState(0)

	// Change the state to the input
	const onChangeHandler = (e) => {
		setNumber(e.target.value)
	}

	// Increases the counter by 1
	const counterHander = () => {
		setCounter(counter + 1)
	}
	return (
		<div className='App'>
			
			<input
				type='number'
				placeholder='Enter a number'
				value={number}
				onChange={onChangeHandler}></input>

			<div>OUTPUT: {squaredNum}</div>
			<button onClick={counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
      <Factorial />
		</div>
	)
}

// Function to square the value
function squareNum(number) {
	console.log("Squaring will be done!")
	return Math.pow(number, 2)
}

export default App
