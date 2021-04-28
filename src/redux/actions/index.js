export default {
  GET_TOKEN: 'GET_TOKEN',
  GET_CONFIG_APP: 'GET_CONFIG_APP',
  GET_NEWS_GROUP: 'GET_NEWS_GROUP',
  GET_NEWS: 'GET_NEWS',
  GET_NEWS_BY_GROUP: 'GET_NEWS_BY_GROUP',
  GET_NEWS_DETAIL: 'GET_NEWS_DETAIL',
  GET_FOCUS_NEWS: 'GET_FOCUS_NEWS',
  GET_NOTIFICATION: 'GET_NOTIFICATION',
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  GET_USER: 'GET_USER',
  GET_TERMS_OF_USE: 'GET_TERMS_OF_USE',
};

export function getActionSuccess(action) {
  return action + '_SUCCESS';
}
export function getActionFail(action) {
  return action + '_FAIL';
}
export function getActionUnmount(action) {
  return action + '_UNMOUNT';
}
