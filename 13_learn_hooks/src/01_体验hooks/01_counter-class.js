import React, { PureComponent } from 'react'

export default class CounterClass extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div>
                <h2>class计数器：{this.state.counter}</h2>
                <button onClick={e => this.btn(1)}>+1</button>
                <button onClick={e => this.btn(-1)}>-1</button>
            </div>
        )
    }
    btn(v) {
        this.setState({
            counter: this.state.counter + v
        })
    }
}
