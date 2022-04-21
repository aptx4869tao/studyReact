import React, { PureComponent } from 'react'
// import { connect } from '../utils/connect'
import { connect } from 'react-redux'

// import axios from 'axios'
import { subAct, addAct, fetchHomeMultidataAction } from '../store/actionCreators'
class Home extends PureComponent {
    componentDidMount() {
        console.log(this.props)
        this.props.getHomeMultidata()
    }
    render() {
        return (
            <div>
                <h1>home</h1>
                <h2>当前计数：{this.props.counter}</h2>
                <button
                    onClick={e => {
                        this.props.subO()
                    }}>
                    -1
                </button>
                <button
                    onClick={e => {
                        this.props.subF()
                    }}>
                    +1
                </button>

                <ul>
                    {this.props.banner.map(item => {
                        return <li key={item.acm}>{item.title}</li>
                    })}
                </ul>

                <ul>
                    {this.props.recommend.map(obj => {
                        return <li key={obj.acm}> {obj.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        counter: state.counterInfo.counter,
        banner: state.homeInfo.banner,
        recommend: state.homeInfo.recommend
    }
}
const mapDispachProp = dispatch => {
    return {
        subO: () => {
            dispatch(subAct())
        },
        subF: () => {
            dispatch(addAct())
        },
        getHomeMultidata() {
            dispatch(fetchHomeMultidataAction)
        }
    }
}
export default connect(mapStateToProps, mapDispachProp)(Home)
