import React, { PureComponent, createContext } from 'react'

// 高阶组件
function withUser(Wrapped) {
    return props => {
        return (
            <User.Consumer>
                {user => {
                    return <Wrapped {...props} {...user} />
                }}
            </User.Consumer>
        )
    }
}

// 创建countext
const User = createContext({
    niakname: 'Tom',
    level: -1
})

class Home extends PureComponent {
    render() {
        return (
            <h2>
                About
                {this.props.nickname}:{this.props.level}
            </h2>
        )
    }
}
// Home.contextType=User
class About extends PureComponent {
    render() {
        return (
            <h2>
                About
                {this.props.nickname}:{this.props.level}
            </h2>
        )
    }
}
const UserHome = withUser(Home)
const UserAbout = withUser(About)

export default class App extends PureComponent {
    render() {
        return (
            <div>
                <User.Provider value={{ nickname: '张三', level: 99 }}>
                    <UserHome></UserHome>
                    <UserAbout></UserAbout>
                </User.Provider>
            </div>
        )
    }
}
