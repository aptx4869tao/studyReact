import React, { PureComponent } from 'react'

function withTime(Wrapped) {
    return class extends PureComponent {
        //即将渲染获取时间
        componentWillMount() {
            // 即将挂载
            this.sTime = Date.now()
        }
        // 渲染完成时间
        componentDidMount() {
            // 挂载完成
            this.eTime = Date.now()
            console.log(`${Wrapped.name}:${this.eTime - this.sTime}`)
        }
        render() {
            return <Wrapped {...this.props}></Wrapped>
        }
    }
}

class Home extends PureComponent {
    render() {
        return <h2>Home</h2>
    }
}
// Home.contextType=User
class About extends PureComponent {
    render() {
        return <h2>About</h2>
    }
}
const TimeHome = withTime(Home)
const TimeAbout = withTime(About)
export default class App extends PureComponent {
    render() {
        return (
            <div>
                <TimeHome></TimeHome>
                <TimeAbout></TimeAbout>
            </div>
        )
    }
}
