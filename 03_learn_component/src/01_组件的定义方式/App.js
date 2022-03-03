// import Reavt, { Component } from 'react'

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       mes: '你好'
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h2>我是App组件</h2>
//         <h2>{this.state.mes}</h2>
//       </div>
//     )
//   }
// }
/**
 * 函数式组件的特点
 * 1.没有this对象
 * 2.没有内部状态(hooks)
 * 3.没有生命周期
 */
export default function App() {
  return (
    <div>
      <h2>我是函数式组件</h2>
    </div>
  )
}
