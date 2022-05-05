import React, { useCallback, useState } from 'react'

/**
 * useCallback 使用场景
 * 场景：在将一个组件中的函数，传递给子元素进行回调使用时
 */
const HyButton = props => {
    return <button onClick={props.increment}>+1</button>
}

export default function CallbackDemo1() {
    const [count, setCount] = useState(0)
    const increment1 = () => {
        console.log('执行')
        setCount(count + 1)
    }
    const increment2 = useCallback(() => {
        console.log('执行')
        setCount(count + 1)
    }, [])
    return (
        <div>
            CallbackDemo{count}
            {/* <button onClick={increment1}>+1</button>
            <button onClick={increment2}>+1</button> */}
            <HyButton increment1={increment1} />
            <HyButton increment2={increment2} />
        </div>
    )
}
