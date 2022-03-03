import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            fruits: 'banana'
        }
    }
    render() {
        return (
            <div>
                <form
                    onSubmit={e => {
                        this.handleSubmit(e)
                    }}>
                    <select
                        name="fruits"
                        onChange={e => {
                            this.handleChange(e)
                        }}
                        value={this.state.fruits}>
                        <option value="apple">苹果</option>
                        <option value="banana">香蕉</option>
                        <option value="orange">橘子</option>
                    </select>
                    <input type="submit" value="提交" />
                </form>
            </div>
        )
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.fruits)
    }
    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            fruits: e.target.value
        })
    }
}
