import React, { useState } from 'react'

export default function ComplexHookState() {
    const [firend, setFirend] = useState(['张三', '李四'])
    return (
        <div>
            <h2>好友列表：</h2>
            <ul>
                {firend.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <button onClick={e => setFirend([...firend, '王二'])}>添加好友</button>
        </div>
    )
}
