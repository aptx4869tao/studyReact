import React, { useEffect, useRef, useState } from 'react'

export default function RefHookDemo() {
    const [count, setCount] = useState(0)
    const ref = useRef(count)
    useEffect(() => {
        ref.current = count
    }, [count])
    return (
        <div>
            <div>count上次的值:{ref.current}</div> {/**在整个生命周期中保持不变 */}
            <div>count当前的值:{count}</div>
            <button
                onClick={e => {
                    setCount(count + 10)
                }}>
                按钮
            </button>
        </div>
    )
}
