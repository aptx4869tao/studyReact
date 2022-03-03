import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            userName: ''
        }
    }
    render() {
        return (
            <div>
                <form
                    onSubmit={e => {
                        this.handleSubmit(e)
                    }}>
                    <label htmlFor="">
                        用户:{' '}
                        <input
                            type="text"
                            id="usename"
                            onChange={e => {
                                this.handleChange(e)
                            }}
                            value={this.state.userName}
                        />
                    </label>
                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.userName)
    }
    handleChange(e) {
        // console.log(e.target.value)
        this.setState({
            userName: e.target.value
        })
    }
}
