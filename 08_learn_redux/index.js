import store from './store/index.js'
import { addAction, subAction,subAct,addAct } from './store/actionCreators.js'

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addAction(10))
store.dispatch(subAction(5))
store.dispatch(addAct())
store.dispatch(subAct())
