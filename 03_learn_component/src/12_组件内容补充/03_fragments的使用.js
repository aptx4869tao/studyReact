import React, { Fragment, PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            coun: 0,
            fri: [
                { name: 'why', age: 20 },
                { name: 'why', age: 20 },
                { name: 'why', age: 20 }
            ]
        }
    }
    render() {
        return (
            // 不渲染div
            // <Fragment>
            //     <h2>{this.state.coun}</h2>
            //     <button onClick={e => this.btn()}>+1</button>
            // </Fragment>
            //段语法 不能添加属性
            <>
                <h2>{this.state.coun}</h2>
                <button onClick={e => this.btn()}>+1</button>
                <div>
                    {this.state.fri.map(e => {
                        return (
                            <Fragment key={e.name}>
                                <div>{e.name}</div>
                                <p>{e.age}</p>
                            </Fragment>
                        )
                    })}
                </div>
            </>
        )
    }
    btn() {
        this.setState({
            coun: this.state.coun + 1
        })
    }
}
