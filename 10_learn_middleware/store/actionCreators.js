import { ADD_NUMBER, SUB_NUMBER,ADD_NUM,SUB_NUM } from './constants.js'

export const addAction = num => {
    return {
        type: ADD_NUMBER,
        num
    }
}
export const subAction = num => ({
    type: SUB_NUMBER,
    num
})
export const addAct=()=>{
    return{
        type:ADD_NUM,
    }
}
export const subAct=()=>{
    return {
        type:SUB_NUM,
    }
}