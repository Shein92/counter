import React from 'react';
import SetCounterOutput from './SetCounterOutput';
import Button from '../../Common/Button/Button';
import styles from '../Counter/Counter.module.css'
import { saveState } from '../../App';

type SetCounterPropsType = {
	setNewChangeMode: (bool: boolean) => void,
	error: boolean,
	setErrorChange: (bool: boolean) => void,
	changeMode: boolean
	minNumber: number,
	maxNumber: number,
	setNewMaxNumber: (num: number) => void
	setNewMinNumber: (num: number) => void
}

function SetCounter(props: SetCounterPropsType) {

	let mainStyle = {
		width: '90px',
		height: '30px',
		backgroundColor: 'rgb(67, 185, 218)',
		marginTop: '10px',
		outline: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
		border: 'none',
		fontSize: '20px',
	};
	let inactiveBtn = {
		width: '90px',
		height: '30px',
		backgroundColor: 'grey',
		marginTop: '10px',
		outline: 'none',
		borderRadius: '5px',
		border: 'none',
		fontSize: '20px'
	}

	function minNumberChange(num:number) {
		props.setNewMinNumber(num);
	}
	function maxNumberChange(num:number) {
		props.setNewMaxNumber(num);
	}

	function onClickChangeMinMaxValues () {
		props.setNewChangeMode(false);
		saveState('min', props.minNumber);
		saveState('max', props.maxNumber);
	}

	return (
		<div className={styles.wrapper}>
			<SetCounterOutput 
				minNum={props.minNumber}
				maxNum={props.maxNumber}
				minNumberChange={minNumberChange}
				maxNumberChange={maxNumberChange}
				setNewChangeMode={props.setNewChangeMode}
				error={props.error}
			/>
			<div className={styles.btnWrapper}>
				<Button title="set"
					disabled={props.minNumber >= props.maxNumber || !props.changeMode ? true : false}
					onClick={onClickChangeMinMaxValues}
					style={props.minNumber >= props.maxNumber || !props.changeMode ? inactiveBtn : mainStyle}
				/>
			</div>
		</div>
	)
}

export default SetCounter;