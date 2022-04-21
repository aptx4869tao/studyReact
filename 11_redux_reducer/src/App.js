import React, { PureComponent } from 'react'
import About from './pages/about3'
import Home from './pages/home5'
export default class App extends PureComponent {
  render() {
    return (
      <div>
          <Home/>
          <About/>
      </div>
    )
  }
}
