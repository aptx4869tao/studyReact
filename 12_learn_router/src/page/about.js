import React, { PureComponent } from 'react'
import { Link, Navigate, Outlet, Route, Routes } from 'react-router-dom'

function About1(){
  return(
     <div>
    <h2>关于</h2>
    </div>
  )
}
function About2(){
  return(
     <div>
    <h2>理念</h2>
    </div>
  )
}
function About3(){
  return(
     <div>
    <h2>简介</h2>
    </div>
  )
}
export default class About extends PureComponent {
  // constructor(props){
  //   super(props)
  // }
  render() {
    return (
      <div>
        <Link  to='about1'>关于</Link>
        <Link to='about2'>理念</Link>
        <Link to='about3'>简介</Link>
        <Routes>
          <Route  path='about1' element={<About1/>}/>
          <Route path='about2' element={<About2/>} />
          <Route path='about3' element={<About3/>}/>
          <Route path='' element={<Navigate to='/about/about1'/>}/>
        </Routes>
        <Outlet/>      
      </div>
    )
  }
}
