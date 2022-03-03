import React, { Component } from 'react'
// Heater
function Header() {
  return <h2>我是Header组件</h2>
}

function Banner() {
  return <h3>我是Banner组件</h3>
}
function List() {
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
function Main() {
  return (
    <div>
      <Banner />
      <List />
    </div>
  )
}

// Footer
function Footer() {
  return <h2>我是Footer组件</h2>
}
export default class app extends Component {
  render() {
    return (
      <div>
        app组件
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
