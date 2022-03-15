import React, { PureComponent } from 'react'
import './style.css'
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <div>
                    <h2>标题</h2>
                    <ul className="setting">
                        <li>设置1</li>
                        <li>设置2</li>
                        <li>设置3</li>
                    </ul>
                </div>
            </div>
        )
    }
}
