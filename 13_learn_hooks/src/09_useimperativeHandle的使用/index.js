import React, { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react'
function btn() {
    console.log('子组件函数')
}
function FancyInput(props, ref) {
    const inputRef = useRef()
    const [data, setData] = useState(0)

    useImperativeHandle(ref, () => ({
        // 把ref进行重写
        focus: () => {
            // console.log('子组件的Ref')
            inputRef.current.focus()
        },
        demo: () => {
            console.log('111')
            // return inputRef.current.value
            // 可以传递方法和属性
            // return btn()
            // return data
            // return { name: 'why', age: 18 }
            // console.log(ref)
            // inputRef.current.
        }
    }))
    return <input type="text" ref={inputRef} />
}
const Fancy = forwardRef(FancyInput)
// function addBtn(){
//     ref.current.demo()
// }
export default function UseimperativeHandle() {
    const ref = useRef()
    // useEffect(() => {
    //     // ref.current.focus()
    //     console.log(ref.current.demo())
    // }, [])
    function addBtn() {
        ref.current.demo()
    }
    return (
        <div>
            <Fancy ref={ref} />
            <button onClick={addBtn}>按钮</button>
        </div>
    )
}
