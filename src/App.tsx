import React from 'react';
import './App.css';
import Counter from './Components/Counter/Counter';
import SetCounter from './Components/SetCounter/SetCounter';
import { useSelector, useDispatch } from 'react-redux';
import { AppRootStateType } from './state/store';
import { InitialStateType, resetNumberAC, setNewMinNumberAC, setNewMaxNumberAC, setChangeModeAC, setErrorAC, incrementNumberAC } from './state/counter-reducer';

export function saveState<T>(key: string, state: T) {
	const stateAsString = JSON.stringify(state);
	localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
	const stateAsString = localStorage.getItem(key);
	if (stateAsString !== null) defaultState = JSON.parse(stateAsString);
	return defaultState;
}

function App() {
	const counter = useSelector<AppRootStateType, InitialStateType>(state => state.counter);
	const dispatch = useDispatch();

	function incrementNumber() {
		let action = incrementNumberAC();
		dispatch(action);
	}

	function resetNumber() {
		let action = resetNumberAC();
		dispatch(action);
	}

	function setNewMinNumber(num: number) {
		let action = setNewMinNumberAC(num);
		dispatch(action);
	}

	function setNewMaxNumber(num: number) {
		let action = setNewMaxNumberAC(num);
		dispatch(action);
	}

	function setNewChangeMode(bool: boolean) {
		let action = setChangeModeAC(bool);
		dispatch(action);
	}

	function setErrorChange(bool: boolean) {
		let action = setErrorAC(bool);
		dispatch(action);
	}

	return (
		<div className="App">
			<SetCounter
				minNumber={counter.minNumber}
				maxNumber={counter.maxNumber}
				setNewChangeMode={setNewChangeMode}
				error={counter.error}
				changeMode={counter.changeMode}
				setErrorChange={setErrorChange}
				setNewMinNumber={setNewMinNumber}
				setNewMaxNumber={setNewMaxNumber}
			/>
			<Counter number={counter.number}
				minNumber={counter.minNumber}
				maxNumber={counter.maxNumber}
				incrementNumber={incrementNumber}
				resetNumber={resetNumber}
				changeMode={counter.changeMode}
				error={counter.error}
			/>
		</div>
	);
}

export default App;
