import React, { Component } from 'react'
import Tab from './Tab'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counterIndex: '新款',
      titles: ['新款', '精选', '流行']
    }
  }
  render() {
    const { counterIndex, titles } = this.state
    return (
      <div>
        <Tab
          titles={titles}
          itemClick={index => {
            this.itemClick(index)
          }}
        />
        <h2>{counterIndex}</h2>
      </div>
    )
  }
  itemClick(index) {
    // const titles = titles
    this.setState({
      counterIndex: this.state.titles[index]
    })
    console.log(index)
  }
}
