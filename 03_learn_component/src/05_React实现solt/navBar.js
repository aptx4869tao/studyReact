import React, { Component } from 'react'

export default class navBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { leftSlot, centerSlot, rightSlot } = this.props //双标签里的数据传入到这里
    console.log(this.props.children)
    return (
      <div className="box">
        {/* map(函数，可遍历对象) */}
        {/* {React.Children.map(this.props.children, (value, index) => {
          return (
            (
              <div className="nav-left">
                {value}
                {index}
              </div>
            ),
            (
              <div className="nav-center">
                {value}
                {index}
              </div>
            ),
            (
              <div className="nav-right">
                {value}
                {index}
              </div>
            )
          )
        })} */}

        <div className="nav-left">{leftSlot}</div>

        <div className="nav-center">{centerSlot}</div>

        <div className="nav-right">{rightSlot}</div>
      </div>
    )
  }
}
