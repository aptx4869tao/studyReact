import React, { PureComponent } from 'react'

export default class App extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            friends:[
                {name:'张三',age:20},
                {name:'李四',age:23},
                {name:'王二',age:16},
            ]
        }
    }
    // shouldComponentUpdate(newProps,newState){
    //     if(newState.friends!==this.state.friends){
    //         return true
    //     }
    //     return false
    // }
  render() {
    return (
      <div>
          <ul>
              {
              this.state.friends.map((item,index)=>{
                  return( 
                  <li key={index}>
                    {item.name} {item.age}
                   <button onClick={e=>{this.add(index)}}>+1</button>
                   </li>
                  ) 
              })
              }
          </ul>
          <button onClick={e=>{this.btn()}}>添加</button>
      </div>
    )
  }
  btn(){
    //   const newdata={name:'bb',age:30}
    //     this.state.friends.push(newdata)
       this.setState({
        
    //     friends:this.state.friends
        friends:[...this.state.friends,{name:'aa',age:'22'}]
      })
  }
  add(i){
      const data=[...this.state.friends]
      data[i].age+=1
    this.setState({
        friends:data
    })
  }
}
  