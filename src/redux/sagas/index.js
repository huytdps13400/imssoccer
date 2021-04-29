import {all, fork} from 'redux-saga/effects';
import {watchConfigAppSagas} from './configAppSaga';
import {watchNewsSagas} from './newSaga';
import {watchTokenSagas} from './tokenSaga';
import {watchUserSagas} from './userSaga';
export default function* rootSaga() {
  yield all([fork(watchConfigAppSagas)]);
  yield all([fork(watchNewsSagas)]);
  yield all([fork(watchTokenSagas)]);
  yield all([fork(watchUserSagas)]);
}
