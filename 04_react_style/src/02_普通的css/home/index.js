import React, { PureComponent } from 'react'
import './style.css'
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <h2>标题</h2>
                <div className="banner"></div>
                <span>轮播图</span>
            </div>
        )
    }
}
