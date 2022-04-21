import React, { PureComponent } from 'react'
// import { connect } from '../utils/connect'
import { connect } from 'react-redux'

import axios from 'axios'
import {subAct,addAct,changeBaner,changeRecommend} from '../store/actionCreators'
class Home extends PureComponent {
  componentDidMount(){
    axios({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then(res=>{
      const banner=res.data.data.banner.list
      const recommend=res.data.data.recommend.list
      this.props.changeBaner1(banner)
      this.props.changeRecommend1(recommend)
    })
  }
  render() {
    return (
      <div>
          <h1>home</h1>
          <h2>当前计数：{this.props.counter}</h2>
          <button onClick={e=>{this.props.subO()}}> -1</button>
          <button onClick={e=>{this.props.subF()}}> +1</button>

          <ul>{this.props.banner.map(item => {
          return <li key={item.acm}>{ item.title}</li>
          })}</ul>

          <ul>{this.props.recommend.map(obj =>{
            return <li key={obj.acm}> {obj.title}</li>
          })}</ul>
      </div>
    )
  }
}
const mapStateToProps=state=>{
  return {
    counter:state.counter,
    banner:state.banner,
    recommend:state.recommend
  }
}
const mapDispachProp=dispatch=>{
  return {
    subO:()=>{
      dispatch(subAct())
    },
    subF:()=>{
      dispatch(addAct())
    },
    changeBaner1:(data)=>{
      dispatch(changeBaner(data))
    },
    changeRecommend1:(data)=>{
      dispatch(changeRecommend(data))
    }
  }
}
export default connect(mapStateToProps,mapDispachProp)(Home)