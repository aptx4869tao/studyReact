import React, { PureComponent } from 'react'
import About from '../about/index'
import Home from '../home/index'
import styled,{ThemeProvider} from 'styled-components'



const Hybutton=styled.button`
margin: 10px 20px;
padding: 10px 20px;
color: red;
`
const Hybutton1=styled(Hybutton)`// 继承
color: white;
`
export default class App extends PureComponent {
    render() {
        return (
            <ThemeProvider theme={{themeColor:'yellow',fontSize:'30px'}}> 
                <Hybutton>App按钮</Hybutton>
                <Hybutton1>App按钮</Hybutton1>
                <Home />
                <About />
            </ThemeProvider>
        )
    }
}
