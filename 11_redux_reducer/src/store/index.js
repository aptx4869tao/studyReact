import {createStore,applyMiddleware, compose} from 'redux'
import reducer from './reducer.js'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'
// componentEnhancer()函数
const componentEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true })||compose


// 引入createSageMiddleware
//创建
const sagaMiddleware=createSagaMiddleware()
//应用中间件

// applyMiddleware(中间件1，中间件2，...)

const storeEnhancer= applyMiddleware(thunkMiddleware,sagaMiddleware)
const store = createStore(reducer,componentEnhancer(storeEnhancer))


sagaMiddleware.run(saga)
export default store
