import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: ['1', '2', '3', '4', '5', '6']
    }
  }
  render() {
    return (
      <div>
        {this.state.count.map(item => {
          return (
            <ul>
              <li>{item}</li>
            </ul>
          )
        })}
        <button
          onClick={e => {
            this.btn()
          }}>
          添加数据
        </button>
      </div>
    )
  }
  btn() {
    //   setState继承于Component
    this.setState({
      count: [...this.state.count, '1']
    })
  }
}
