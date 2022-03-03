import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 'Hello , Word'
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数:{this.state.count}</h2>
        <button
          onClick={e => {
            this.btn()
          }}>
          改变文本
        </button>
        <button id="btn">改变</button>
      </div>
    )
  }
  //   组件已经挂载完成 数据已经更新，没有更新视图，是为了获取多个更新
  componentDidMount() {
    //   情况二
    document.querySelector('#btn').addEventListener('click', () => {
      this.setState({
        count: '你好'
      })
      console.log(this.state.count)
    })
  }
  btn() {
    //   情况一
    setTimeout(() => {
      this.setState({
        count: '你好'
      })
      console.log(this.state.count,"1")
    }, 0)
    //   setState继承于Component
    // 是异步更新
    // setState传入两个参数 （1.更新的state， 2.回调函数）

    console.log(this.state.count,"2")
  }
}
