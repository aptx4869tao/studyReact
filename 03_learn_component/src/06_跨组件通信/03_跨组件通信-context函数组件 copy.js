import React, { Component } from 'react'

// 创建contest对象
const UserContext = React.createContext({
  name: 'codewhy',
  LV: -1
})
// 不能用Context
// UserContext.Consumer订阅
function ProfileHeader(props) {
  return (
    <UserContext.Consumer>
      {value => {
        return (
          <div>
            <h2>用户昵称:{value.name}</h2>
            <h2>用户昵称:{value.LV} </h2>
          </div>
        )
      }}
    </UserContext.Consumer>
  )
}
// class ProfileHeader extends Component {
//   render() {
//     console.log(this.context)
//     return (
//       <div>
//         <h2>用户昵称：{this.context.name}</h2>
//         <h2>用户昵称：{this.context.LV} </h2>
//       </div>
//     )
//   }
// }
// ProfileHeader.contextType = UserContext
function Profile(props) {
  return (
    <div>
      <ProfileHeader />
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
      LV: 99
    }
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}
