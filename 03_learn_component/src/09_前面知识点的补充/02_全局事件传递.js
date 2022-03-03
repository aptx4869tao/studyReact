import React, { PureComponent } from 'react'

import { EventEmitter } from 'events'
// 事件总线 event bus
const eventbus = new EventEmitter()
class Home extends PureComponent {
    componentDidMount() {
        eventbus.addListener('say', this.handleListener)
    }

    componentWillUnmount() {
        // 即将卸载时 取消事件监听
        eventbus.removeListener('say', this.handleListener)
    }

    handleListener(num, msg) {
        msg()
        console.log(num)
        // 传入的数据放在数组里
    }

    render() {
        return <div>Home</div>
    }
}
class Profile extends PureComponent {
    render() {
        return (
            <div>
                <div>Profile</div>
                <button
                    onClick={e => {
                        this.btn()
                    }}>
                    按钮
                </button>
            </div>
        )
    }
    btn() {
        eventbus.emit('say', 'hello Home', this.a)
    }
    a() {
        console.log(111)
    }
}
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home></Home>
                <Profile></Profile>
            </div>
        )
    }
}
