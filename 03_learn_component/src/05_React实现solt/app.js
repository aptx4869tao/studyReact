import React, { Component } from 'react'
import Nav from './navBar'
export default class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          <span>a</span>
          <span>b</span>
          <span>a</span>
        </Nav>
        {/* <Nav>
          <span>aa</span>
          <span>bb</span>
          <span>cc</span>
        </Nav>
        <Nav>
          <span>aaa</span>
          <span>bbb</span>
          <span>ccc</span>
        </Nav> */}
        <Nav
          leftSlot={<span>aaa</span>}
          centerSlot={<span>bbb</span>}
          rightSlot={<span>ccc</span>}
        />
      </div>
    )
  }
}
