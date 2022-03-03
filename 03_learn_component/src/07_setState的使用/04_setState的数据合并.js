import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 'Hello , Word',
      name: 'codewhy'
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <h2>{this.state.name}</h2>
        <button
          onClick={e => {
            this.btn()
          }}>
          改变文本
        </button>
      </div>
    )
  }

  btn() {
    //   情况一

    this.setState({ 
      count: '你好'
    })
    // 把后边两个对象的属性copy到第一个对象里
//   object.assign({},this.state,{count:'你好'})

   
  }
}
