import React, { useState } from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import SetCounter from './Components/SetCounter/SetCounter';

export function saveState<T>(key: string, state: T) {
	const stateAsString = JSON.stringify(state);
	localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
	const stateAsString = localStorage.getItem(key);
	if (stateAsString !== null)  defaultState = JSON.parse(stateAsString); 
	return defaultState;
}

function App() {

	let [number, setNumber] = useState<number>(0);
	let [minNumber, setMinNumber] = useState<number>(() => {
		const savedMinNum = localStorage.getItem('min');
		return savedMinNum !== null ? JSON.parse(savedMinNum) : 0
	});
	let [maxNumber, setMaxNumber] = useState<number>(() => {
		const savedMaxNum = localStorage.getItem('max');
		return savedMaxNum !== null ? JSON.parse(savedMaxNum) : 5;
	});
	let [changeMode, setChangeMode] = useState<boolean>(false);
	let [error, setError] = useState<boolean>(false);

	if(minNumber < 0) setMinNumber(0);
	if(maxNumber < 0) setMaxNumber(0);
	if (minNumber >= maxNumber && error === false) {
		setError(true);
		console.log('13');
	}
	if (minNumber < maxNumber && error === true) setError(false);
	if (maxNumber  < 0 && error === false) {
		setError(true);
		console.log('skldf')
	}
	if (minNumber < 0  && error === false) {
		setError(true)
		console.log('henlo')
		console.log(error);
	}

	function incrementNumber () {
		setNumber(++number);
	}

	function resetNumber() {
		setNumber(minNumber);
	}

	function setNewMinNumber(num: number) {
		setMinNumber(num);
		setNumber(num);
	}

	function setNewMaxNumber(num: number){
		setMaxNumber(num);
	}

	function setNewChangeMode(bool: boolean) {
		setChangeMode(bool);
	}

	function setErrorChange(bool: boolean) {
		setError(bool)
	}

	return (
		<div className="App">
			<SetCounter 
				minNumber={minNumber}
				maxNumber={maxNumber}
				setNewChangeMode={setNewChangeMode}
				error={error}
				changeMode={changeMode}
				setErrorChange={setErrorChange}
				setNewMinNumber={setNewMinNumber}
				setNewMaxNumber={setNewMaxNumber}
			/>
			<Counter number={number}
				minNumber={minNumber}
				maxNumber={maxNumber}
				incrementNumber={incrementNumber}
				resetNumber={resetNumber}
				changeMode={changeMode}
				error={error}
			/>
		</div>
	);
}

export default App;
