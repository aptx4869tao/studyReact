import React, { Component } from 'react'
// Heater
function Header() {
  console.log('Header被调用')
  return <h2>我是Header组件</h2>
}

class Banner extends Component {
  render() {
    console.log('banner render被调用')
    return <h3>我是Banner组件</h3>
  }
}
function List() {
  console.log('List被调用')

  return (
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
    </ul>
  )
}
// Main
class Main extends Component {
  render() {
    console.log('Main render被调用')

    return (
      <div>
        <Banner />
        <List />
      </div>
    )
  }
}

// Footer
function Footer() {
  console.log('Footer被调用')

  return <h2>我是Footer组件</h2>
}
export default class app extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  render() {
    console.log('app render被调用')

    return (
      <div>
        <h2>当前计数:{this.state.count}</h2>
        <button
          onClick={e => {
            this.btn()
          }}>
          加一
        </button>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
  btn() {
    this.setState({
      count: this.state.count + 1
    })
  }
}
