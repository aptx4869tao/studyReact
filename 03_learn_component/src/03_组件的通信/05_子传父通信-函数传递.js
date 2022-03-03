import React, { Component } from 'react'
class Child extends Component {
  render() {
    const { btnClick } = this.props
    return (
      <div>
        子组件按钮
        <button onClick={btnClick}>+</button>
      </div>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        当前计数: {this.state.counter}
        <hr />
        父组件按钮
        <button
          onClick={e => {
            this.add()
          }}>
          +
        </button>
        <Child btnClick={this.add} />
        {/* <Child btnClick={e=>{this.add()}} /> */}
      </div>
    )
  }
  add = () => {
    this.setState({
      counter: this.state.counter + 1
    })
    console.log('add被调用')
  }
}
