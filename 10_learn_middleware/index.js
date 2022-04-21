import store from './store/index.js'
import { addAction, subAction,subAct,addAct } from './store/actionCreators.js'

store.subscribe(() => {
    // console.log(store.getState())
})

// store.dispatch(addAction(10))
// store.dispatch(subAction(5))
// store.dispatch(addAct()) 
// store.dispatch(subAct())


//封装打印日志函数
// function dispatchAndLogging(action){
//     console.log("前，action:", action);
//     store.dispatch(action)
//     console.log("后,state:", store.getState());

// }
// dispatchAndLogging(addAction(10))

// 优化 
// hack技术：monkeyingpatch
// const next=store.dispatch
// function dispatchAndLogging(action){
//     console.log("前，action:", action);
//    next(action)
//     console.log("后,state:", store.getState());

// }
// store.dispatch=dispatchAndLogging
// store.dispatch(addAction(10))
// store.dispatch(addAction(5))

//进行封装

function patchLogging(store){
    const next=store.dispatch
    function dispatchAndLogging(action){
        console.log("前，action:", action);
        next(action)
        console.log("后,state:", store.getState());

    }
// store.dispatch=dispatchAndLogging
    return dispatchAndLogging
}
/** 封装 patchThunk的功能*/ 

function patchThunk(store){
    const next=store.dispatch
    function dispatchAndThunk(action){
        if(typeof action==='function'){
            action(store.dispatch,store.getState)
        }else{
            next(action)
        }
    }
store.dispatch=dispatchAndThunk
}


patchLogging(store)
patchThunk(store)

function foo(dispatch,getState){
    dispatch(subAct())
}

store.dispatch(addAction(10))
store.dispatch(addAction(5))
store.dispatch(foo)

/**封装applyMiddleware */
function applyMiddleware(...args){
// const newMiddleware=[...args]
    args.forEach(middleware=>{
        store.dispatch=middleware(store)
    })

}
applyMiddleware(patchLogging,patchThunk)