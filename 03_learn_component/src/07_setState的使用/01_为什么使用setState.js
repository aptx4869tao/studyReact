import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
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
          +1
        </button>
      </div>
    )
  }
  btn() {
    //   setState继承于Component
    this.setState({
      count: this.state.count + 1
    })
  }
}
