export type InitialStateType = {
    number: number,
    minNumber: number,
    maxNumber: number,
    changeMode: boolean,
    error: boolean
}

const savedMinNum = localStorage.getItem('min');
const savedMaxNum = localStorage.getItem('max');

let initialState: InitialStateType = {
    number: savedMinNum !== null ? JSON.parse(savedMinNum) : 0,
    minNumber: savedMinNum !== null ? JSON.parse(savedMinNum) : 0,
    maxNumber: savedMaxNum !== null ? JSON.parse(savedMaxNum) : 5,
    changeMode: false,
    error: false
}

type SetNewMinNumberActionType = {
    type: 'SET-NEW-MIN-NUMBER',
    minNum: number
}
type SetNewMaxNumberActionType = {
    type: 'SET-NEW-MAX-NUMBER',
    maxNum: number
}
type IncrementNumberActionType = {
    type: 'INCREMENT-NUMBER'
}
type ResetNumberActionType = {
    type: 'RESET-NUMBER'
}
type SetChangeModeActionType = {
    type: 'SET-CHANGE-MODE',
    bool: boolean
}
type SetErrorActionType = {
    type: 'SET-ERROR',
    bool: boolean
}

type ActionsType = SetNewMinNumberActionType | SetNewMaxNumberActionType | IncrementNumberActionType | ResetNumberActionType | SetChangeModeActionType | SetErrorActionType

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch(action.type) {
        case 'SET-NEW-MIN-NUMBER': {
            return {...state, number: action.minNum, minNumber: action.minNum}
        }
        case 'SET-NEW-MAX-NUMBER': {
            return {...state, maxNumber: action.maxNum}
        }
        case 'INCREMENT-NUMBER': {
            return {...state, number: (state.number + 1)}
        }
        case 'RESET-NUMBER': {
            return {...state, number: state.minNumber}
        }
        case 'SET-CHANGE-MODE': {
            return {...state, changeMode: action.bool}
        }
        case 'SET-ERROR': {  
            return {...state, error: action.bool}
        }


        default: {
            return state
        }
    }
}

export const setNewMinNumberAC = (minNum: number): ActionsType => {
    return {type: 'SET-NEW-MIN-NUMBER', minNum}
}
export const setNewMaxNumberAC = (maxNum: number): ActionsType => {
    return {type: 'SET-NEW-MAX-NUMBER', maxNum}
}
export const incrementNumberAC = (): ActionsType => {
    return {type: 'INCREMENT-NUMBER'}
}
export const resetNumberAC = (): ActionsType => {
    return {type: 'RESET-NUMBER'}
}
export const setChangeModeAC = (bool: boolean): ActionsType => {
    return {type: 'SET-CHANGE-MODE', bool}
}
export const setErrorAC = (bool: boolean): ActionsType => {
    return {type: 'SET-ERROR', bool}
}