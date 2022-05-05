import React, { memo, useCallback, useMemo, useState } from 'react'

const HYInfo = memo(props => {
    console.log('子组件')
    return (
        <div>
            {props.info()().name}
            {props.info()().age}
        </div>
    )
})

const HYIn = memo(props => {
    console.log('111')
    return <div>{props.info()().name}</div>
})

export default function MemoHookDemo2() {
    console.log('渲染')
    // const info = { name: 'why', age: 18 }
    /**
     * useMemo返回的是值 是直接对值得优化
     */
    // const info = useMemo(() => {
    //     return { name: 'why', age: 18 }
    // }, [])
    /**
     * useCallback返回的是函数，是可以让子组件进行调用
     */
    const info = useCallback(() => {
        return () => {
            return { name: 'why', age: 18 }
        }
    }, [])
    const [show, setShow] = useState(true)
    return (
        <div>
            <HYInfo info={info}></HYInfo>
            <button onClick={e => setShow(!show)}>显示</button>
            <HYIn info={info} />
        </div>
    )
}
