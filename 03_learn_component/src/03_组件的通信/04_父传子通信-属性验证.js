import React, { Component } from 'react'
import PropTypes from 'prop-types'
function Child(props) {
  const { name, age, height } = props
  const { names } = props
  return (
    <div>
      <h2>{name + age + height}</h2>
      <ul>
        {names.map(item => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  )
}
class Childs extends Component {
  // es6中calss fields
  static propTypes = {}
  static defaultProps = {}
}
// Childs.propTypes = {}
Child.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array
}
Child.defaultProps = {
  name: '张三',
  age: 22,
  height: 170,
  names: [0, 9, 8, 7, 6, 5, 4, 3, 2, 1]
}
export default class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Child age={18} height={1.88} names={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]} />
        <Child name="pink" age={40} height={1.75} names={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]} />
      </div>
    )
  }
}

// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       parentText: 'this is parent text',
//       arr: [
//         {
//           userName: 'fangMing',
//           text: '123333',
//           result: true
//         },
//         {
//           userName: 'zhangSan',
//           text: '345555',
//           result: false
//         },
//         {
//           userName: 'liSi',
//           text: '567777',
//           result: true
//         },
//         {
//           userName: 'wangWu',
//           text: '789999',
//           result: true
//         }
//       ]
//     }
//   }

//   render() {
//     return (
//       <div>
//         {/* 通过绑定事件进行值的运算，这个地方一定要记得.bind(this)，
//           不然会报错，切记切记，因为通过事件传递的时候this的指向已经改变 */}
//         <ComentList arr={this.state.arr} pfn={this.fn.bind(this)}></ComentList>
//         <p>text is {this.state.parentText}</p>
//       </div>
//     )
//   }
//   fn(data) {
//     this.setState(
//       {
//         parentText: data //把父组件中的parentText替换为子组件传递的值
//       },
//       () => {
//         console.log(this.state.parentText) //setState是异步操作，但是我们可以在它的回调函数里面进行操作
//       }
//     )
//   }
// }
// // 子组件
// class ComentList extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       childText: 'this is child text'
//     }
//   }

//   render() {
//     return (
//       <div className="list">
//         <ul>
//           {this.props.arr.map(item => {
//             return (
//               <li key={item.userName}>
//                 {item.userName} 评论是:{item.text}
//               </li>
//             )
//           })}
//         </ul>
//         {/* //通过事件进行传值，如果想得到event，可以在参数最后加一个event，
//         这个地方还是要强调，this，this，this */}
//         <button onClick={this.clickFun.bind(this, this.state.childText)}>click me</button>
//       </div>
//     )
//   }
//   clickFun(text) {
//     this.props.pfn(text) //这个地方把值传递给了props的事件当中
//   }
// }
