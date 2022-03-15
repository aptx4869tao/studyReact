import React, { PureComponent } from 'react'
// import './style.css'
import aboutStyle from './style.module.css'
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <h2>标题</h2>
                <ul className={aboutStyle.setting}>
                    <li>设置1</li>
                    <li>设置2</li>
                    <li>设置3</li>
                </ul>
            </div>
        )
    }
}
