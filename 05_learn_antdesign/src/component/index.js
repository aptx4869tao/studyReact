import React, { PureComponent } from 'react'
import Input from './components/input'
import Item from './components/item'
export default class APP extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    render() {
        return (
            <div style={{width:'500px'}}>
                {
                    this.state.list.map((item,index)=>{
                        return <Item key={item.id} list={item} removeitem={e=>this.remove2(index)}/>
                    })
                }
                <Input submit={this.submit.bind(this)} a={this.state.a}/>
            </div>
        )
    }
    submit(val){
    this.setState({
        list:[...this.state.list,val]
    })
    }
remove2(index){
    const lists=[...this.state.list]
    lists.splice(index,1)
    this.setState({
        list:[...lists]
    })
}
}
