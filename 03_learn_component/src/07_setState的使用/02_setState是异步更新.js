import React, { Component } from 'react'

function Home(props) {
  return <h1>{props.count}</h1>
}

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
        <Home count={this.state.count} />
      </div>
    )
  }
  componentDidUpdate(){ // 组件发生了更新调用
    // render函数运行后触发的生命周期
  }
  btn() {
    //   setState继承于Component
    // 是异步更新
    // setState传入两个参数 （1.更新的state， 2.回调函数）
    this.setState(
      {
        count: '你好'
      },
      () => {
        console.log(this.state.count,"1") // 更新后的count
      }
    )
    console.log(this.state.count,"2") // 获取的是更新前的count
    console.log((1, 2, 3))
    let a = (2, 3)  
    console.log(a)

    // console.log(a)
  }
}
