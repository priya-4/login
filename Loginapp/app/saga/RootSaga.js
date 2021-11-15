import { all } from 'redux-saga/effects';


import handleLoginDataWatcher from './LoginDataSaga';


export default function* rootSaga() {
  yield all([
  
    handleLoginDataWatcher(),
  ]);
}
