import React, { PureComponent } from 'react'
import { Input,Button } from 'antd'
import moment from 'moment'
const { TextArea } = Input
export default class input extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            const:''
        }
    }
    render() {
        return (
            <>
                <TextArea rows={6} cols={30} value={this.state.const} onChange={e=>{this.b(e)}} />
                <Button style={{marginTop:'20px'}} type="primary" onClick={()=>{this.a()} }>添加评论</Button>
            </>
        )
    }
    a(){
        // console.log(this.state.const);
        const info={
            text:this.state.const,
            time:moment(),
            name:"阿巴阿巴",
            id:moment().valueOf()
        }
        this.props.submit(info)
        this.setState({
            const:''
        })
    }
    b(event){
        this.setState({
            const:event.target.value
        })
    }
   
}