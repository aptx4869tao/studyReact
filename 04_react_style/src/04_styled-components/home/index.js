import React, { PureComponent } from 'react'
import{ S ,A,B} from './style'


export default class App extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            color:'#999'
        }
    }
    render() {
        return (
            <S>
                <A>标题</A>
                <span className='banner'>轮播图</span>
                <B type="text" color={this.state.color} />
            </S>
        )
    }
}
