import React, { PureComponent } from 'react'
// import axios from 'axios'
import reuqest from './utils/request'
export default class App extends PureComponent {
    // async componentDidMount() {
    //     // axios({
    //     //     url:'https://httpbin.org/get',
    //     //     params:{
    //     //         name:'tao',
    //     //         age:18
    //     //     },
    //     //     method:'get'
    //     // }).then(res=>{
    //     //     console.log(res);
    //     // })
    //     // axios({
    //     //     url:'https://httpbin.org/post',
    //     //     data:{
    //     //         name:'tcs',
    //     //         age:18
    //     //     },
    //     //     method:'post'
    //     // }).then(res=>{
    //     //     console.log(res);
    //     // })
    //     // axios.get('https://httpbin.org/get',{params:{name:'tt',age:11}}).then(console.log)

    //     //    try{
    //     //        const result=await axios.post('https://httpbin.org/post',{data:{name:'zs',age:20}})
    //     //         console.log(result);
    //     //    }catch(err){
    //     //         console.log(err);
    //     //    }

    //     const request1 = axios({
    //         url: '/get',
    //         params: { name: 'qwe', age: 20 }
    //     })
    //     const request2 = axios.post('https://httpbin.org/post', {
    //         data: {
    //             name: 'qwe',
    //             age: 20
    //         }
    //     })
    //     axios.all([request1, request2]).then(([res1, res2]) => {
    //         console.log(res1, res2)
    //     })

    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('resolve')
    //         }, 1000)
    //     })
    //     const promise1 = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('resolve1')
    //         }, 5000)
    //     })

    //     Promise.all([promise, promise1]).then(res => {
    //         console.log(res)
    //     })

    //     const inst=axios.create({
    //         baseURL:'http://tao.com',
    //         timeout:5000
    //     })
    //     const inst1=axios.create({
    //         baseURL:'http://tcs.xom'
    //     })
    // }

    componentDidMount() {
        // //????????????
        // axios.interceptors.request.use(
        //     config => {
        //         // ??????????????????????????????????????????????????????loading??????

        //         // ???????????????????????????????????????token

        //         // params/data???????????????

        //         return config
        //     },
        //     err => {}
        // )
        // //????????????
        // axios.interceptors.response.use(
        //     res => {
        //         return res.data
        //     },
        //     err => {
        //         if (err && err.response) {
        //             switch (err.response.status) {
        //                 case 400:
        //                     console.log('????????????')
        //                     break
        //                 case 401:
        //                     console.log('???????????????')
        //                     break
        //                 default:
        //                     console.log('????????????')
        //             }
        //         }
        //         return err
        //     }
        // )
        // reuqest
        //     .post('/post', { param: { name: 'name' } })
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {})
        reuqest({url:'/post',data:{name:'name'},method:'post'}).then(res=>{
            console.log(res);
        })
    }
    render() {
        return <div>App</div>
    }
}
