// import React, { PureComponent } from 'react'
// import classNames from 'classnames'
// export default class App extends PureComponent {
//     constructor(props){
//         super(props)
//         this.state={
//             isActive:true
//         }
//     }
//   render() {
//       const isbar=false
//       const {isActive}=this.state
//       const errclass='error'
//       const warn=0
//     return (
//       <>
//           <div className={'foo title'}>app</div>
//           <div className={'title'+(isActive?'active':'')}>1</div> {/**需要添加空格 */}
//           <div className={['title',(isActive?'active':'')].join(' ')}></div>
//           {/* classnames添加class */}
//           <h2 className={classNames('foo','bar')}>标题1</h2>
//           <h2 className={classNames({'active':isActive,'bar':isbar},'title')}>标题2</h2>
//           <h2 className={classNames('foo',errclass,warn)}>标题3</h2>
//           <h2 className={classNames(['foo',{'bar':isbar}])}>标题4</h2>
//           <h2>标题5</h2>
//       </>
//     )
//   }
// }

import React, { PureComponent } from 'react'
import { Button, Space, DatePicker } from 'antd'
import { PoweroffOutlined } from '@ant-design/icons'
import moment from 'moment'
const { RangePicker } = DatePicker

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            loadings: []
        }
    }
    enterLoading = index => {
        this.setState(({ loadings }) => {
            const newLoadings = [...loadings]
            newLoadings[index] = true
            return {
                loadings: newLoadings
            }
        })
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings]
                newLoadings[index] = false

                return {
                    loadings: newLoadings
                }
            })
        }, 6000)
    }
    render() {
        const { loadings } = this.state
        return (
            <>
                <Space style={{ width: '100%' }}>
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                        Loading
                    </Button>
                    <Button type="primary" icon={<PoweroffOutlined />} loading />
                </Space>
                <Space style={{ width: '100%' }}>
                    <Button
                        type="primary"
                        loading={loadings[0]}
                        onClick={() => this.enterLoading(0)}>
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[1]}
                        onClick={() => this.enterLoading(1)}>
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[2]}
                        onClick={() => this.enterLoading(2)}
                    />
                    <RangePicker />
                    <DatePicker
                        defaultValue={moment('2015-06-06', 'YYYY-MM-DD')}
                        // allowClear={false}
                    />
                </Space>
            </>
        )
    }
}
