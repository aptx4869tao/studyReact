import React, { PureComponent } from 'react'
// import './style.css'
import homeStyle from './style.module.css'
export default class App extends PureComponent {
    render() {
        return (
            <div className={homeStyle}>
                <h2>标题</h2>
                <div className={homeStyle.banner}></div>
                <span>轮播图</span>
            </div>
        )
    }
}
