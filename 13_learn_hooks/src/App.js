import React, { createContext, useState } from 'react'
// import CounterClass from './01_体验hooks/01_counter-class'
// import CounterHook from './01_体验hooks/02_counter-hook'
// import MultHookState from './02_useSate的使用/01_多个状态'
// import ComplexHookState from './02_useSate的使用/02_复杂状态'
import HookChangeTitle from './03_useEffect的使用/01_Hook实现title的改变'
import EffectHookCancelDemo from './03_useEffect的使用/02_useEffect模拟订阅和取消'
import MultiEffect from './03_useEffect的使用/03_多个useEffect一起使用'
import ContextDemo from './04_useContext使用/01_useContext的使用'
import Home from './05_useReducer的使用/home'
import CallbackDemo from './06_useCallback的使用/01_useCallback不能进行性能优化'
import CallbackDemo1 from './06_useCallback的使用/02_useCallback进行性能优化'
import UseMemoDemo from './07_useMemo的使用/01_useMemo复杂计算的应用'
import MemoHookDemo2 from './07_useMemo的使用/02_useMemo传入子组件'
import UseRef from './08_useRef的使用'
import RefHookDemo from './08_useRef的使用/02_useRef引用其他属性'
import UseimperativeHandle from './09_useimperativeHandle的使用'
import EffectCount from './10_useLayoutEffect/01_useEffect的count修改'
import LayoutEffectCount from './10_useLayoutEffect/02_useLayoutEffect的count修改'
import CustomHookLifeDemo from './11_自定义Hook/01_认识自定义Hook'
import CustomHook from './11_自定义Hook/02_自定义Hook的练习'
import CustomLocalStorage from './11_自定义Hook/03_自定义Hook练习-localStorage存储'

export const UserContext = createContext()
export const ThemeContext = createContext()

export default function App() {
    const [show, setShow] = useState(true)
    return (
        <div>
            {/* <CounterClass />
            <CounterHook />
            <MultHookState /> */}
            {/* <ComplexHookState /> */}
            {/* <HookChangeTitle /> */}
            {/* {show && <EffectHookCancelDemo />} */}
            {/* <MultiEffect /> */}
            {/* <button
                onClick={e => {
                    setShow(!show)
                }}>
                切换
            </button> */}
            {/* <UserContext.Provider value={{ name: '张三', age: 18 }}>
                <ThemeContext.Provider value={{ color: 'red' }}>
                    <ContextDemo />
                </ThemeContext.Provider>
            </UserContext.Provider> */}
            {/* <Home /> */}
            {/* <CallbackDemo /> */}
            {/* <CallbackDemo1 /> */}
            {/* <UseMemoDemo /> */}
            {/* <MemoHookDemo2 /> */}
            {/* <UseRef /> */}
            {/* <RefHookDemo /> */}
            {/* <EffectCount /> */}
            {/* <LayoutEffectCount /> */}
            {/* {show && <CustomHookLifeDemo />} */}
            {/* <CustomHook /> */}
            <CustomLocalStorage />
            {/* <UseimperativeHandle /> */}
        </div>
    )
}
