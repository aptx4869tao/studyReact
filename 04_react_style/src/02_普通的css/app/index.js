import React, { PureComponent } from 'react'
import About from '../about/index'
import Home from '../home/index'

export default class App extends PureComponent {
    render() {
        return (
            <div>
                App
                <Home />
                <About />
            </div>
        )
    }
}
