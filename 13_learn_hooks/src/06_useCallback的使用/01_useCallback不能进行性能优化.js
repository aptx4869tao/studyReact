import React, { useCallback, useState } from 'react'

export default function CallbackDemo() {
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
            <button onClick={increment1}>+1</button>
            <button onClick={increment2}>+1</button>
        </div>
    )
}
