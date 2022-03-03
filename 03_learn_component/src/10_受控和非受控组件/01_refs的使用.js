import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.titleref = createRef()
        this.titleRef = null
    }
    render() {
        return (
            <div>
                {/* <div ref='字符串/对象/函数'></div> */}
                {/* 已被删除 */}
                <h2 ref="title">hello</h2>
                {/* 推荐使用这个 */}
                <h2 ref={this.titleref}>你好</h2>
                <h2
                    ref={arg => {
                        this.titleRef = arg
                    }}>
                    你好呀
                </h2>
                <button onClick={e => this.btn()}>按钮</button>
            </div>
        )
    }
    btn() {
        // 字符串 不推荐 以移除
        // console.log(this.refs.title)
        this.refs.title.innerHTML = 'nihao'
        // 对象
        console.log(this.titleref.current)
        // 函数
        console.log(this.titleRef)
    }
}
