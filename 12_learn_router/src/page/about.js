import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const About1 = function About1() {
    return (
        <div>
            <h2>关于</h2>
        </div>
    )
}
export const About2 = function About2() {
    return (
        <div>
            <h2>理念</h2>
        </div>
    )
}
export const About3 = function About3() {
    return (
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
                <Link to="about1">关于</Link>
                <Link to="about2">理念</Link>
                <Link to="about3">简介</Link>
                <Outlet />
            </div>
        )
    }
}
