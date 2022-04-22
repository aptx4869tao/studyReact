import React, { PureComponent } from 'react'
import CSStransition from './transition/CSStransition'
import Switchtransition from './transition/SwitchTransution'
import TransitionGroupDemo from './transition/TransitionGroupDemo'
export default class App extends PureComponent {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <CSStransition></CSStransition>
                <Switchtransition></Switchtransition>
                <TransitionGroupDemo></TransitionGroupDemo>
            </div>
        )
    }
}
