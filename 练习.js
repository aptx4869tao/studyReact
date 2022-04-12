import React, { PureComponent } from 'react'
const Usercontext = React.createContext({
    name: 'tom',
    age: 23
})
// 函数式传参
function ChiHeader2(props) {
    return (
        <Usercontext.Consumer>
            {value => {
                return (
                    <>
                        {value.name}:{value.age}
                    </>
                )
            }}
        </Usercontext.Consumer>
    )
}

// 类组件传参
class ChiHeader extends PureComponent {
    render() {
        return (
            <Usercontext.Consumer>
                {value => {
                    return (
                        <>
                            {value.name}:{value.age}
                        </>
                    )
                }}
            </Usercontext.Consumer>
        )
    }
}
ChiHeader.contextType = Usercontext

class Chi extends PureComponent {
    render() {
        return (
            <>
                类组件传参:
                <ChiHeader />
                <div>子组件</div>
                函数式传参:
                <ChiHeader2 />
            </>
        )
    }
}

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Tom',
            age: 22
        }
    }
    render() {
        return (
            <>
                <Usercontext.Provider value={this.state}>
                    <Chi />
                </Usercontext.Provider>
            </>
        )
    }
}
