import { ADD_NUMBER, SUB_NUMBER,ADD_NUM,SUB_NUM,CHANGE_BANNER,CHANGE_RECOMMEND } from './constants.js'

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