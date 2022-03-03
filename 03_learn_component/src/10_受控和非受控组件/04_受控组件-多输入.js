import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            valid: ''
        }
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
                        <input
                            type="text"
                            id="usename"
                            name="username"
                            onChange={e => {
                                this.handleChange(e)
                            }}
                            value={this.state.username}
                        />
                    </label>
                    <label htmlFor="password">
                        密码:
                        <input
                            type="text"
                            id="password"
                            name="password"
                            onChange={e => {
                                this.handleChange(e)
                            }}
                            value={this.state.password}
                        />
                    </label>
                    <label htmlFor="valid">
                        验证:
                        <input
                            type="text"
                            id="valid"
                            name="valid"
                            onChange={e => {
                                this.handleChange(e)
                            }}
                            value={this.state.valid}
                        />
                    </label>
                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
    handleSubmit(e) {
        e.preventDefault()
        const { username, password, valid } = this.state
        console.log(username, password, valid)
    }
    handleChange(e) {
        // console.log(e.target.value)
        this.setState({
            // 计算属性名
            [e.target.name]: e.target.value
        })
    }
}
