import axios from 'axios'
import { BASE_URl, TIMEOUT } from './config'

const instance = axios.create({
    baseURL: BASE_URl,
    timeout: TIMEOUT
})

// 请求拦截
instance.interceptors.request.use(
    config => {
        console.log(config);
        // 发送网络请求时，在界面的中间位置显示loading组件

        // 某一些请求要求用户必须携带token

        // params/data序列化操作

        return config
    },
    err => {}
)
// 响应拦截
instance.interceptors.response.use(
    res => {
        return res
    },
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    console.log('请求错误')
                    break
                case 401:
                    console.log('未授权访问')
                    break
                default:
                    console.log('其他错误')
            }
        }
        return err
    }
)
export default instance
