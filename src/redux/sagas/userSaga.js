import API from '../../../utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {getActionFail, getActionSuccess} from '../actions';

function* getUser(actions) {
  try {
    const res = yield API.get('getUser', actions.params);
    if (res.error.error_code > 0) {
      yield put({type: getActionFail(Actions.GET_USER), error: res.error});
    } else {
      yield put({type: getActionSuccess(Actions.GET_USER), data: res.data});
    }
  } catch (error) {}
}

export function* watchUserSagas() {
  yield takeLatest(Actions.GET_USER, getUser);
}
