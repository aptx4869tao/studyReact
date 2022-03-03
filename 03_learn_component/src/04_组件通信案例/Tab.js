import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './tab.css'
export default class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  render() {
    const { currentIndex } = this.state
    const { titles } = this.props //传递过来的
    return (
      <div className="box">
        {titles.map((item, index) => (
          <div
            key={index}
            className={'tabSon ' + (index === currentIndex ? 'rs' : '')}
            onClick={e => {
              console.log(e)
              this.btn(index)
            }}>
            <span> {item} </span>
          </div>
        ))}
      </div>
    )
  }
  btn(index) {
    this.setState({
      currentIndex: index
    })
    const { itemClick } = this.props
    itemClick(index) //父组件的函数名
  }
}
Tab.propTypes = {
  titles: PropTypes.array.isRequired
}
