import React, { PureComponent } from 'react'
import store from '../store'
import {subAction} from '../store/actionCreators'
export default class Home extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            counter:store.getState().counter
        }
    }
    componentDidMount(){
     this.unsubscribe=store.subscribe(()=>{
            this.setState({
                counter:store.getState().counter
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }
  render() {
    return (
      <div>
          <h1>home</h1>
          <h2>当前计数：{this.state.counter}</h2>
          <button onClick={e=>{this.subO(1)}}>-1</button>
          <button onClick={e=>{this.subF(5)}}>-5</button>
      </div>
    )
  }
  subO(num){
    store.dispatch(subAction(num))
  }
  subF(num){
      store.dispatch(subAction(num))
  }
}
