import API from '../../../utils/api';
import {put, takeLatest} from 'redux-saga/effects';
import Actions, {getActionFail, getActionSuccess} from '../actions';

function* getNews(actions) {
  try {
    const res = yield API.get('getNews', actions.params);
    if (res.error.error_code > 0) {
      yield put({
        type: getActionFail(Actions.GET_NEWS),
        error: res.error,
      });
    } else {
      yield put({
        type: getActionSuccess(Actions.GET_NEWS),
        data: res,
      });
    }
  } catch (error) {}
}
function* getNewsGroup(actions) {
  try {
    const res = yield API.get('getNewsGroup', actions.params);
    if (res.error.error_code > 0) {
      yield put({
        type: getActionFail(Actions.GET_NEWS_GROUP),
        error: res.error,
      });
    } else {
      yield put({
        type: getActionSuccess(Actions.GET_NEWS_GROUP),
        data: res,
      });
    }
  } catch (error) {}
}

function* getNewsByGroup(actions) {
  try {
    const res = yield API.get('getNews', actions.params);
    if (res.error.error_code > 0) {
      yield put({
        type: getActionFail(Actions.GET_NEWS_BY_GROUP),
        error: res.error,
      });
    } else {
      yield put({
        type: getActionSuccess(Actions.GET_NEWS_BY_GROUP),
        data: res,
      });
      actions.onFinish();
    }
  } catch (error) {}
}

function* getNewsDetail(actions) {
  try {
    const res = yield API.get('getNews', actions.params);
    if (res.error.error_code > 0) {
      yield put({
        type: getActionFail(Actions.GET_NEWS_DETAIL),
        error: res.error,
      });
    } else {
      yield put({
        type: getActionSuccess(Actions.GET_NEWS_DETAIL),
        data: res,
      });
    }
  } catch (error) {}
}
export function* watchNewsSagas() {
  yield takeLatest(Actions.GET_NEWS, getNews);
  yield takeLatest(Actions.GET_NEWS_GROUP, getNewsGroup);
  yield takeLatest(Actions.GET_NEWS_BY_GROUP, getNewsByGroup);
  yield takeLatest(Actions.GET_NEWS_DETAIL, getNewsDetail);
}
