import React, { useEffect } from 'react'
function Home() {
    return <div>HOME</div>
}
function About() {
    return <div>ABOUT</div>
}
export default function CustomHookLifeDemo() {
    useLogging()
    return (
        <div>
            <h2>11111</h2>
            <Home />
            <About />
        </div>
    )
}
function useLogging() {
    useEffect(() => {
        console.log('创建')
        return () => {
            console.log('销毁')
        }
    }, [])
}
