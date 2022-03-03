import React, { PureComponent, createRef, forwardRef } from 'react'

class Home extends PureComponent {
    render() {
        return <h2>Home</h2>
    }
}
// Home.contextType=User

const About = forwardRef(function (props, ref) {
    return <h2 ref={ref}>About</h2>
})

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.titleRef = createRef()
        this.homeRef = createRef()
        this.aboutRef = createRef()
    }
    render() {
        return (
            <div>
                <h2 ref={this.titleRef}>你好</h2>
                <Home ref={this.homeRef} />
                <About ref={this.aboutRef} name={'tao'} />
                <button
                    onClick={e => {
                        this.btn()
                    }}>
                    点击
                </button>
            </div>
        )
    }
    btn() {
        console.log(this.titleRef)
        console.log(this.homeRef)
        console.log(this.aboutRef)
    }
}
