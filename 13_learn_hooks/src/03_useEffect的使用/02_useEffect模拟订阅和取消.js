import React, { useEffect, useState } from 'react'

export default function EffectHookCancelDemo() {
    const [count, setState] = useState(0)
    useEffect(() => {
        console.log('订阅')
        return () => {
            console.log('取消订阅')
        }
    }, []) // 参数二仅为数组
    return (
        <div>
            <h2>EffectHookCancelDemo</h2>
            {count}
            <button
                onClick={e => {
                    setState(count + 1)
                }}>
                +1
            </button>
        </div>
    )
}
