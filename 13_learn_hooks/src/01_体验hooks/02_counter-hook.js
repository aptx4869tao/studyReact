import React, { useEffect, useState } from 'react'

export default function CounterHook() {
    //
    /**
     * hook: useState
     * 本身是一个函数 来自react包
     * 参数 返回值
     * 参数：是给创建的状态一个默认值
     * 返回值： 数组
     *      state的值
     *      设置新的值时，使用的一个函数
     */
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `点击了${count}次`
    })
    return (
        <div>
            <h2>HOOK计数器：{count}</h2>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e => setCount(count - 1)}>-1</button>
        </div>
    )
}
