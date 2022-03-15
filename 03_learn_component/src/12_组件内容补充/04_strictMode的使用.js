import React, { PureComponent, StrictMode } from 'react'

class Home extends PureComponent {
    constructor(props) {
        super(props)
        console.log('111')
    }
    render() {
        return <div>Home</div>
    }
    // UNSAFE_componentWillMount() {
    //     console.log('已过期')
    // }
}
class About extends PureComponent {
    render() {
        return <div>About</div>
    }
    UNSAFE_componentWillMount() {
        console.log('About')
    }
}
export default class App extends PureComponent {
    render() {
        return (
            // 开启严格模式 只对后代使用
            <div>
                <StrictMode>
                    <Home />
                </StrictMode>
                <About />
            </div>
        )
    }
}
