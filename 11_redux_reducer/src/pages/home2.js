import React, { PureComponent } from 'react'
import { connect } from '../utils/connect'

import {subAct,addAct} from '../store/actionCreators'
class Home extends PureComponent {
  render() {
    return (
      <div>
          <h1>home</h1>
          <h2>当前计数：{this.props.counter}</h2>
          <button onClick={e=>{this.props.subO()}}> -1</button>
          <button onClick={e=>{this.props.subF()}}> +1</button>
      </div>
    )
  }
}
const mapStateToProps=state=>{
  return {
    counter:state.counter
  }
}
const mapDispachProp=dispatch=>{
  return {
    subO:num=>{
      dispatch(subAct())
    },
    subF:num=>{
      dispatch(addAct())
    }
  }
}
export default connect(mapStateToProps,mapDispachProp)(Home)