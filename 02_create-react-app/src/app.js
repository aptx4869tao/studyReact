import React, { Component } from 'react'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  render() {
    return (
      <div>
        <button>+</button>
        <h2>当前计数：</h2>
        <button>-</button>
      </div>
    )
  }
}
