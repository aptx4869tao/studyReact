// export default 生成器函数
import { takeEvery, put, all } from 'redux-saga/effects'
import { FEATCH_HOME_MULTIDATA } from './constants'
import axios from 'axios'
import { changeBaner, changeRecommend } from './actionCreators'
function* fetchHomeMultidata(action) {
    const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
    const banners = res.data.data.banner.list
    const recommend = res.data.data.recommend.list
    // yield put(changeBaner(banners))
    // yield put(changeRecommend(recommend))
    yield all([
        yield put(changeBaner(banners)),
        yield put(changeRecommend(recommend))
    ])
}
function* mysaga() {
    // takeEvery takeLatest
    // takeLatest一次只能监听一个对应的action
    //takeEvery 是每个都执行
    // yield takeEvery(FEATCH_HOME_MULTIDATA,生成器函数)
    yield takeEvery(FEATCH_HOME_MULTIDATA, fetchHomeMultidata)
}

export default mysaga
