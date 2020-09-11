import React, { ChangeEvent, CSSProperties } from 'react';
import style from '../Counter/Counter.module.css'

type MinValue1PropsType = {
    value: number,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    style: CSSProperties
}

function MinValue1(props: MinValue1PropsType) {
    return (
        <div className={style.inputTop}>
            Min Value: <input type="number" value={props.value}
                onChange={props.onChange}
                style={props.style}
            />
        </div>
    )
}

const MinValue = React.memo(MinValue1);

export default MinValue;