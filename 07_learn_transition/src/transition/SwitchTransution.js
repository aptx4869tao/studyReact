import React, { PureComponent } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './SwitchTransition.css'
export default class APP extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isOn: true
        }
    }
    render() {
        const { isOn } = this.state
        return (
            <div>
                <SwitchTransition mode="out-in">
                    <CSSTransition timeout={300} key={isOn ? 'on' : 'off'} classNames="btn">
                        <button onClick={e => this.setState({ isOn: !isOn })}>
                            {isOn ? 'on' : 'off'}
                        </button>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        )
    }
}
