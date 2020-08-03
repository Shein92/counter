import React, { CSSProperties } from 'react'

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled: boolean
    style: CSSProperties
}

function Button(props: ButtonPropsType) {
    return ( 
        <button style={props.style} onClick={props.onClick} disabled={props.disabled}>{props.title}</button>
    )
}

export default Button;