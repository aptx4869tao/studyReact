import redux from 'redux'
// commonjs 是nodejs的一种实现
// const redux = require('redux')
const init = {
    counter: 0
}

//reducer
function reducer(state = init, actions) {
    switch (actions.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        case 'ADD_NUMBER':
            return { ...state, counter: state.counter + actions.num }
        case 'SUB_NUMBER':
            return { ...state, counter: state.counter - actions.num }
        default:
            return state
    }
}

//store 需要传递一个reducer
const store = redux.createStore(reducer)
//订阅store的修改
store.subscribe(() => {
    console.log('state改变')
})
//actions
const actions1 = { type: 'INCREMENT' }
const actions2 = { type: 'DECREMENT' }
const actions3 = { type: 'ADD_NUMBER', num: 5 }
const actions4 = { type: 'SUB_NUMBER', num: 12 }
//派发actions
store.dispatch(actions1)
store.dispatch(actions2)
store.dispatch(actions3)
store.dispatch(actions4)
