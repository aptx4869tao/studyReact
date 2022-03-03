import React, { PureComponent, createRef } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.titltref = createRef()
    }
    render() {
        return (
            <div>
                <form
                    onSubmit={e => {
                        this.handleSubmit(e)
                    }}>
                    <label htmlFor="usename">
                        用户:
                        <input type="text" id="usename" ref={this.titltref} />
                    </label>
                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.titltref.current.value)
        // console.log(this.state.userName)
    }
}
