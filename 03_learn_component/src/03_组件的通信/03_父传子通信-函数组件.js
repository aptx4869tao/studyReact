import React, { Component } from 'react'
function Child(props) {
    const { name, age, height } = props
    return <h2>{name + age + height}</h2>
}
export default class app extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Child name="why" age="18" height="1.88" />
                <Child name="pink" age="40" height="1.78" />
            </div>
        )
    }
}
