import React, { Component } from 'react'

function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称:{props.name}</h2>
      <h2>用户昵称:{props.LV}</h2>
    </div>
  )
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader {...props} />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'codewhy',
      LV: 80
    }
  }
  render() {
    return (
      <div>
        <Profile {...this.state} />
      </div>
    )
  }
}
