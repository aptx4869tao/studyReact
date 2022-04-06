import React, { PureComponent } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './TransitionGroupDemo.css'
export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            names: ['张三', '李四', '王二']
        }
    }
    render() {
        return (
            <TransitionGroup>
                {this.state.names.map((item, index) => {
                    return (
                        <CSSTransition key={item} classNames="item" timeout={500} in='true'>
                            <div>
                                {item}
                                <button onClick={e => this.remove(index)}>-</button>
                            </div>
                        </CSSTransition>
                    )
                })}
                <button onClick={e => this.btn()}>ADD</button>
            </TransitionGroup>
        )
    }
    btn() {
        this.setState({
            names: [...this.state.names,'Tom']
        })
    }
    remove(index) {
        this.setState({
            names: this.state.names.filter((item, indey) => index !== indey)
        })
    }
}
