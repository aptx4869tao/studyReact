import React, { Component } from 'react'
class Child extends Component {
  render() {
    const { name, age, height } = this.props
    return <h2>子组件展示数据：{name + age + height}</h2>
  }
}
class Clas extends Component {
  render() {
    const { name, age, height, num } = this.props
    return <h2>子组件展示数据:{num}</h2>
  }
}
export default class app extends Component {
  constructor() {
    super()
    this.state = {
      num: 0
    }
  }
  render() {
    return (
      <div>
        <Child />
        <Child name="pink" age="40" height="1.78" />
        <Clas num={this.state.num} />
        <hr />
        {this.state.num}
        <button
          onClick={() => {
            this.btn()
          }}>
          +
        </button>
      </div>
    )
  }
  btn() {
    this.setState({
      num: this.state.num + 1
    })
  }
}
