import React,{ PureComponent } from "react"
import store from "../store"
import  StoreContext  from './context'
export function connect(mapStateToProps,mapDispachProp){
    return  function enhanceHOC(WrappedComponent){
        class EnhanceComponent extends PureComponent{
            constructor(props,context){
                super(props,context)
                this.state={
                    storeState:mapStateToProps(context.getState())
                }
            }
            componentDidMount(){
            this.a=store.subscribe(()=>{
                this.setState({
                    storeState:mapStateToProps(this.context.getState())
                })
                })
            }
            componentWillUnmount(){
                this.a()
            }
            render(){
                return <WrappedComponent {...this.props}
                {...mapStateToProps(this.context.getState())}
                {...mapDispachProp(this.context.dispatch)}/>
            }
        }
        EnhanceComponent.contextType=StoreContext
        return EnhanceComponent
    }
}