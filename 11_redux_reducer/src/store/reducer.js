import {
    ADD_NUMBER,
    SUB_NUMBER,
    ADD_NUM,
    SUB_NUM,
    CHANGE_BANNER,
    CHANGE_RECOMMEND
} from './constants.js'
import { combineReducers } from 'redux'
//拆分counter
const initialCounterState = {
    counter: 0
}
function counterReducer(state = initialCounterState, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num }
        case SUB_NUMBER:
            return { ...state, counter: state.counter - action.num }
        case ADD_NUM:
            return { ...state, counter: state.counter + 1 }
        case SUB_NUM:
            return { ...state, counter: state.counter - 1 }
        default:
            return state
    }
}
const initHomeState = {
    banner: [],
    recommend: []
}
function homeReducer(state = initHomeState, action) {
    switch (action.type) {
        case CHANGE_BANNER:
            return { ...state, banner: action.banner }
        case CHANGE_RECOMMEND:
            return { ...state, recommend: action.recommend }
        default:
            return state
    }
}

// function reducer(state = {}, action) {
//     return {
//         counterInfo: counterReducer(state.counterInfo, action),
//         homeInfo: homeReducer(state.homeInfo, action)
//     }
// }
const reducer=combineReducers({
    counterInfo:counterReducer,
    homeInfo:homeReducer
})
export default reducer
