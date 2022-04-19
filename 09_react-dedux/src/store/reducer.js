import { ADD_NUMBER, SUB_NUMBER,ADD_NUM,SUB_NUM,CHANGE_BANNER,CHANGE_RECOMMEND } from './constants.js'

const defaultState = {
    counter: 0,
    banner:[],
    recommend:[]
}

console.log(defaultState,'defaultState');
function reducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        case SUB_NUMBER:
            return { ...state, counter: state.counter - action.num }
        case ADD_NUM:
            return{...state,counter:state.counter+1}
        case SUB_NUM:
            return{...state,counter:state.counter-1}
        case CHANGE_BANNER:
            return{...state,banner:action.banner}
        case CHANGE_RECOMMEND:
            return{ ...state,recommend:action.recommend}
        default:
            return state
    }
}
export default reducer
