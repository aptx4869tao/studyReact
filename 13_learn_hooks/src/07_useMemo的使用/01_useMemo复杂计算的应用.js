import React, { useMemo, useState } from 'react'
function calcNumber(count) {
    console.log('计算')
    let sum = 0
    for (let i = 1; i <= count; i++) {
        sum += i
    }
    return sum
}
export default function UseMemoDemo() {
    const [count, setCount] = useState(10)
    const [show, setShow] = useState(true)

    const num = useMemo(() => {
        return calcNumber(count)
    }, [count])
    return (
        <div>
            <h2>计数数字的和：{num}</h2>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e => setShow(!show)}>显示</button>
        </div>
    )
}
