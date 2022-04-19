import React  from 'react'
import {connect} from'../utils/connect'
import {subAction,addAction} from '../store/actionCreators'
function About(props) {
    return (
        <div>
        <h1>about</h1>
        <h2>当前计数：{props.counter}</h2>
        <button onClick={e=>{props.a(5)}}>+5</button>
        <button onClick={e=>{props.b(5)}}>-5</button>
    </div>
    )
  
}
const mapStateToProps=state=>{
  return{
    counter:state.counter
  }
} 
const mapDispachProp=dispatch=>{
  return {
    a:function(num){
      dispatch(addAction(num))
    },
    b:function(num){
      dispatch(subAction(num))
    }
  }
}
export default connect(mapStateToProps,mapDispachProp)(About)