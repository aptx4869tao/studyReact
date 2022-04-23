import React, { PureComponent } from 'react'
import { BrowserRouter,Link,Route, Routes } from 'react-router-dom'
import About from './page/about'
import Home from './page/home'
import Profile from './page/profile'
export default class App extends PureComponent {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Link to='/'>首页</Link>
        <Link to='/about'>关于</Link>
        <Link to='/profile'>我的</Link>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}
