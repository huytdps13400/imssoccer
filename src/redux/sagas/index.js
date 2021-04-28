import {all, fork} from 'redux-saga/effects';
import {watchConfigAppSagas} from './configAppSaga';

export default function* rootSaga() {
  yield all([fork(watchConfigAppSagas)]);
}
