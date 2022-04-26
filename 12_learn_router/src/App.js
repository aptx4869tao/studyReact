import React, { PureComponent } from 'react'
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom'
import About from './page/about'
import Detail from './page/detail'
import Home from './page/home'
import Profile from './page/profile'
export default class App extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            Links:[
                {to:'/',title:'首页'},
                {to:'/about',title:'关于'},
                {to:'/profile',title:'我的'},
                {to:'/detail/123',title:'详情'}
            ],
            currentIndex:0
        }
    }
  render() {
    return (
      <div>
      <BrowserRouter>
        {this.state.Links.map((item,index)=>{
            return <Link key={item.to} to={item.to}>{item.title}</Link>
        })}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about/*' element={<About/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
} 
