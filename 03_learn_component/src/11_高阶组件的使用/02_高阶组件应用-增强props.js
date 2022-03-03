import React, { PureComponent } from 'react'

// 定义高阶组件
function enhance(Wrapped) {
    return props => {
        return <Wrapped {...props} />
    }
}

class Home extends PureComponent {
    render() {
        return (
            <h2>
                Home
                {this.props.nickname}:{this.props.level}
            </h2>
        )
    }
}

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
const EnhanceHome = enhance(Home)
const EnhanceAbout = enhance(About)
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <EnhanceHome nickname="tao" level={99} />
                <EnhanceAbout nickname="tcs" level={90} />
            </div>
        )
    }
}
