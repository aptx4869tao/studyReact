import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'

import { Card, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import './CSStransition.css'

const { Meta } = Card
export default class APP extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
    }
    render() {
        const { isShow } = this.state
        return (
            <>
                <button
                    onClick={e => {
                        this.setState({ isShow: !isShow })
                    }}>
                    显示/隐藏
                </button>
                <CSSTransition
                    in={isShow}
                    classNames="card"
                    timeout={300}
                    unmountOnExit={true}
                    appear
                    onEnter={el => console.log('进入状态')}
                    onEntering={el => console.log('正在进入状态')}
                    onEntered={el => console.log('进入完成状态')}
                    onExit={el => console.log('开始退出')}
                    onExiting={el => console.log('退出状态')}
                    onExited={el => console.log('退出完成')}>
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <EllipsisOutlined key="ellipsis" />
                        ]}>
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </CSSTransition>
            </>
        )
    }
}
