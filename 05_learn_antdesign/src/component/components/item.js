import React, { PureComponent } from 'react'
import { Comment, Tooltip, Avatar, } from 'antd'
import {DeleteOutlined} from '@ant-design/icons'
// import moment from 'moment'
require('moment/locale/zh-cn')
// import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons'
export default class item extends PureComponent {
    render() {
        const{text,name,time}=this.props.list
        return (
            <>
                <Comment
                    actions={[
                        <span onClick={e=>this.remove()} > <DeleteOutlined />删除</span>
                    ]}// 列表
                    author={<a href="/#">{name}</a>}
                    avatar={
                        <Avatar src="https://joeschmoe.io/api/v1/random" alt={name} size={40} />
                    }
                    content={
                        <p>
                            {text}
                        </p>
                    }
                    datetime={
                        <Tooltip title={time.format('YYYY-MM-DD HH:mm:ss')}>
                            <span >{time.fromNow()}</span>
                        </Tooltip>
                    }
                />
            </>
        )
    }
    remove(){
        this.props.removeitem()
    }
}
