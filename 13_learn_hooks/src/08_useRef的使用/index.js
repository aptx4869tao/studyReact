import React, { useRef } from 'react'

export default function UseRef() {
    const inputEl = useRef(null)
    const btn = () => {
        //获取自身焦点
        inputEl.current.focus()
    }
    return (
        <div>
            <input ref={inputEl} type="text" />
            <button onClick={btn}>按钮</button>
        </div>
    )
}
