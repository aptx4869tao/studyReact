import React, { useEffect, useState } from 'react'

export default function HookChangeTitle() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = count
    })
    return (
        <div>
            1<h2>{count}</h2>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}>
                +1
            </button>
        </div>
    )
}
