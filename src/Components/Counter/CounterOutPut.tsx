import React from 'react';
import style from './Counter.module.css'

type CounterOutputPropsType = {
	number: number,
	redNumber: boolean,
	changeMode: boolean,
	error: boolean
}

function CounterOutput1(props: CounterOutputPropsType) {
	return (
		<div className={style.outputWrapper}>
			<div className={style.output}>
				{props.error ? <span className={style.incorrectValue}>Incorrect value!</span> :
					props.changeMode ? <span className={style.enterMessage}>Enter some values and press 'set'</span> :
						props.redNumber ? <span className={style.redNumber}>{props.number}</span> :
							<span className={style.regularNumber}>{props.number}</span>}
			</div>
		</div>
	)
}

const CounterOutput = React.memo(CounterOutput1)

export default CounterOutput;

