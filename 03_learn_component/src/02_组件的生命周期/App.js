import React, { Component } from 'react'
class Npm extends Component {
  render() {
    return <h2>我是npm组件</h2>
  }

  componentWillUnmount() {
    console.log('调用了componentWillUnmount方法')
  }
}

export default class App extends Component {
  constructor() {
    super()
    console.log('执行了constructor函数')
    this.state = {
      msg: 1,
      show: true
    }
  }
  render() {
    console.log('执行了render函数')
    return (
      <div>
        我是APP组件
        <h2>{this.state.msg}</h2>
        <button onClick={() => this.add()}>+</button>
        <hr />
        {this.state.show && <Npm />}
        <button onClick={() => this.change()}>切换</button>
      </div>
    )
  }
  add() {
    this.setState({
      msg: this.state.msg + 1
    })
  }
  change() {
    this.setState({
      show: !this.state.show
    })
  }
  componentDidMount() {
    console.log('执行了componentDidMount方法')
  }
  componentDidUpdate(prevProps,prevState,snapshot) {
    console.log('执行了componentDidUpdate方法')
  }
}
