import API from '../../../utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {getActionSuccess, getActionFail} from '../actions';
import queryString from 'query-string';

function* GetToken(actions) {
  const body = queryString.stringify(actions.body);

  try {
    const res = yield API.post('getToken', body);
    if (res.error.error_code > 0) {
      yield put({type: getActionFail(Actions.GET_TOKEN), error: res.error});
    } else {
      yield put({type: getActionSuccess(Actions.GET_TOKEN), data: res.token});
    }
  } catch (error) {}
}
export function* watchTokenSagas() {
  yield takeLatest(Actions.GET_TOKEN, GetToken);
}
