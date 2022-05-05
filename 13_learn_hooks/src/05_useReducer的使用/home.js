import React, { useState, useReducer } from 'react'
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 }
        case 'DECREMENT':
            return { counter: state.counter - 1 }
        default:
            return state
    }
}

export default function Home() {
    // const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    return (
        <div>
            <h2>Home当前计数:{state.counter}</h2>
            <button onClick={e => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={e => dispatch({ type: 'DECREMENT' })}>+1</button>
        </div>
    )
}
