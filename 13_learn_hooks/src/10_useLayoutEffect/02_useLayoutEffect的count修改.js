import React, { useEffect, useLayoutEffect, useState } from 'react'

export default function LayoutEffectCount() {
    const [count, setCount] = useState(10)

    useLayoutEffect(() => {
        if (count === 0) {
            setCount(Math.random())
        }
    }, [count])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={e => setCount(0)}>修改</button>
        </div>
    )
}
