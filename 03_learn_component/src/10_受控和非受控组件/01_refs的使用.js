import React, { PureComponent, createRef } from 'react'

class Count extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button
                    onClick={e => {
                        this.btn()
                    }}>
                    +1
                </button>
            </div>
        )
    }
    btn() {
        this.setState({
            count: this.state.count + 1
        })
    }
}

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.titleref = createRef()
        this.countref = createRef()
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
                <hr />
                <Count ref={this.countref}></Count>
                <button
                    onClick={e => {
                        this.btn1()
                    }}>
                    父组件按钮
                </button>
            </div>
        )
    }
    btn() {
        // 字符串 不推荐 已移除
        // console.log(this.refs.title)
        this.refs.title.innerHTML = 'nihao'
        // 对象
        console.log(this.titleref.current)
        // 函数
        console.log(this.titleRef)
    }
    btn1() {
        // console.log(this.countref)
        this.countref.current.btn() // 子组件的方法
    }
}
