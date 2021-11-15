import { take, put, call, takeLatest, takeEvery } from 'redux-saga/effects'
import { CONSTANT } from '../utils/Constant'
import {LoginDataApi}  from '../apiCalling/LoginDataApi'
import { LoginDataResponse,LoginDataError} from '../actions/LoginDataAction'



//worker saga

function* handleLoginDataResponse(action) {
    try {
        const data = yield call(LoginDataApi,action.password,action.email)
console.log('login response',data);
        yield put(LoginDataResponse(data))
    } catch (error) {
        yield put(LoginDataError(error.toString()))
    }
}

//watcher saga
export default function* handleLoginDataWatcher() {

    yield takeEvery(CONSTANT.Login_DATA, handleLoginDataResponse)

}