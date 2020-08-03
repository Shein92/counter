import React from 'react'
import Button from '../../Common/Button/Button';
import CounterOutput from './CounterOutPut';
import styles from './Counter.module.css';

type CounterPropsType = {
	number: number,
	minNumber: number,
	maxNumber: number,
	incrementNumber: () => void,
	resetNumber: () => void,
	changeMode: boolean,
	error: boolean
}

function Counter(props: CounterPropsType) {

	let mainStyle = {
		width: '90px',
		height: '30px',
		backgroundColor: 'rgb(67, 185, 218)',
		marginTop: '10px',
		outline: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
		border: 'none',
		fontSize: '20px'
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
	return (
        <div className={styles.wrapper}>
			<CounterOutput number={props.number} 
				redNumber={props.number === props.maxNumber} 
				changeMode={props.changeMode}
				error={props.error}
			/>
			<div className={styles.btnWrapper}>
				<Button title="inc"
					onClick={props.incrementNumber}
					disabled={props.number === props.maxNumber || 
						props.changeMode || props.error}
					style={props.number === props.maxNumber || 
						props.changeMode || 
						props.error ? inactiveBtn : mainStyle }
				/>
				<Button title="reset"
					onClick={props.resetNumber}
					disabled={props.number === props.minNumber || 
						props.changeMode ||props.error}
					style={props.number === props.minNumber || 
						props.changeMode || 
						props.error ? inactiveBtn : mainStyle }
				/>
			</div>
		</div>
    )
}

export default Counter;