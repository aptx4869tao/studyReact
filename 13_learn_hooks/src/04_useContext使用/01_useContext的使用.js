import React, { useContext } from 'react'
import { UserContext, ThemeContext } from '../App'
export default function ContextDemo() {
    const user = useContext(UserContext)
    console.log(user)
    // return(
    //     <UserContext.Consumer>
    //     { value =>{
    //         return (
    //             <ThemeContext.Consumer>
    //             {obj=>{
    //                 return(
    //                     <div>{value}{obj}</div>
    //                 )
    //             }}
    //         </ThemeContext.Consumer>
    //         )

    //     }}
    // </UserContext.Consumer>
    // )

    return <div>ContextDemo</div>
}
