import React, { useEffect, useState } from 'react'

export default function MultiEffect() {
    const [count, setState] = useState(0)
    useEffect(() => {
        console.log('修改Dom')
    })
    useEffect(() => {
        console.log('订阅')
    }, [count])
    useEffect(() => {
        console.log('网络请求')
    }, [])
    return (
        <div>
            <h2>MultiEffect</h2>
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
