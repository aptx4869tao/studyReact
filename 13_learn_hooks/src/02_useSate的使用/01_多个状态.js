import React, { useState } from 'react'

export default function MultHookState() {
    // useState()
    const [count, setCount] = useState(0)
    const [firend, setFirend] = useState(['张三', '李四'])
    return (
        <div>
            <h2>{count}</h2>
            <ul>
                {firend.map(item => {
                    return <li key={item}>item</li>
                })}
            </ul>
        </div>
    )
}
