import { ADD_NUMBER, SUB_NUMBER,ADD_NUM,SUB_NUM,CHANGE_BANNER,CHANGE_RECOMMEND,FEATCH_HOME_MULTIDATA} from './constants.js'
import axios from 'axios'
export const addAction = num => {
    return {
        type: ADD_NUMBER,
        num
    }
}
export const subAction = num => ({
    type: SUB_NUMBER,
    num
})
export const addAct=()=>{
    return{
        type:ADD_NUM,
    }
}
export const subAct=()=>{
    return {
        type:SUB_NUM,
    }
}
// 轮播图和推荐数据的 action
export const changeBaner=(banner)=>({
    type:CHANGE_BANNER,
    banner
})
export const changeRecommend=recommend=>({
    type:CHANGE_RECOMMEND,
    recommend
})


// redux--thunk中定义的函数
export  const getHomeMultidataAction=(dispatch,getState)=>{
console.log('laidao');
axios({
    url:'http://123.207.32.32:8000/home/multidata'
  }).then(res=>{
    const banner=res.data.data.banner.list
    const recommend=res.data.data.recommend.list
    dispatch(changeBaner(banner))
    dispatch(changeRecommend(recommend))
  })
}
// redux-saga
export const fetchHomeMultidataAction={
    type: FEATCH_HOME_MULTIDATA
 }