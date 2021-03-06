import React from 'react'
import { Link } from 'react-router-dom'
import Getrouter from './router/index'

export default function App() {
    const counter = 123
    // const Element = useRoutes(routes)
    const Links = [
        { to: '/', title: '首页' },
        { to: '/about', title: '关于' },
        { to: '/profile', title: '我的' },
        { to: `/detail/${counter}`, title: '详情' }, // 动态路由
        { to: '/detail2', title: '详情2', state: { name: 'why', age: 22 } } // state传参
    ]
    return (
        <div>
            {Links.map((item, index) => {
                return (
                    <Link key={item.to} to={item.to} state={item.state ? item.state : {}}>
                        {item.title}
                    </Link>
                )
            })}
            <Getrouter />
        </div>
    )
}
// export default class App extends PureComponent {
//     constructor(props){
//         super(props)
//         this.state={
//             Links:[
//                 {to:'/',title:'首页'},
//                 {to:'/about',title:'关于'},
//                 {to:'/profile',title:'我的'},
//                 {to:`/detail/qqqq`,title:'详情'},
//                 {to:'/detail2',title:'详情2'}
//             ],
//             currentIndex:0
//         }
//     }
//   render() {
//     return (
//       <div>
//         {this.state.Links.map((item,index)=>{
//             return <Link key={item.to} to={item.to}>{item.title}</Link>
//         })}

//       </div>
//     )
//   }
// }
