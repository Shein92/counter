import React, { ChangeEvent } from 'react';
import style from '../Counter/Counter.module.css'

type SetCounterOutputPropsType = {
	minNum: number,
	maxNum: number,
	minNumberChange: (num: number) => void,
	maxNumberChange: (num: number) => void,
	setNewChangeMode: (bool: boolean) => void,
	error: boolean
}

function SetCounterOutput1(props: SetCounterOutputPropsType) {

	const onMinChange = (event: ChangeEvent<HTMLInputElement>) => {
		props.minNumberChange(+event.currentTarget.value);
		props.setNewChangeMode(true);
	}

	const onMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
		props.maxNumberChange(+event.currentTarget.value);
		props.setNewChangeMode(true);
	}

	return (
		<div className={style.outputWrapper}>
			<div className={style.output}>
				<div>
					Max Value: <input type="number" value={props.maxNum}
						onChange={onMaxChange}
						style={props.error ? { width: '50px', textAlign: "center", fontSize: "16px", backgroundColor: 'red' } : { width: '50px', textAlign: "center", fontSize: "16px"}}
					/>
				</div>
				<div className={style.inputTop}>
					Min Value: <input type="number" value={props.minNum}
						onChange={onMinChange}
						style={props.error ? { width: '50px', textAlign: "center", fontSize: "16px", backgroundColor: 'red'  } : { width: '50px', textAlign: "center", fontSize: "16px"}}
					/>
				</div>
				{/* <MinValue value={props.minNum} 
					onChange={onMinChange} 
					style={props.error ? { width: '50px', textAlign: "center", fontSize: "16px", backgroundColor: 'red'  } : { width: '50px', textAlign: "center", fontSize: "16px"}}/> */}
			</div>
		</div>
	)
}

const SetCounterOutput = React.memo(SetCounterOutput1);

export default SetCounterOutput;