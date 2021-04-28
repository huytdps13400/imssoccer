import API from '../../../utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {getActionSuccess, getActionFail} from '../actions';

function* getConfigApp(actions) {
  try {
    const res = yield API.get('getConfigApp', actions.params);
    if (res.error.error_code > 0) {
      yield put({
        type: getActionFail(Actions.GET_CONFIG_APP),
        error: res.error,
      });
    } else {
      yield put({
        type: getActionSuccess(Actions.GET_CONFIG_APP),
        data: res.data,
      });
    }
  } catch (error) {}
}
export function* watchConfigAppSagas() {
  yield takeLatest(Actions.GET_CONFIG_APP, getConfigApp);
}
