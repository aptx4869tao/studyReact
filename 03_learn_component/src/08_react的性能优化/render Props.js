import React, { Component } from 'react'
export default class app extends Component {
    constructor(props) {
        super(props)
        // this.hand = this.hand.bind(this)
        this.state = {
            x: 0,
            y: 0
        }
    }
    render() {
        return (
            <div
                onMouseMove={e => {
                    this.hand(e)
                }}>
                <h1>移动鼠标</h1>
                <p>
                    当前鼠标位置{this.state.x},{this.state.y}
                </p>
            </div>
        )
    }
    hand(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
}
