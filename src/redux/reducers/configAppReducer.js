import Actions, {
  getActionFail,
  getActionSuccess,
  getActionUnmount,
} from '../actions';
const initialState = {
  data: null,
  error: null,
  fetching: false,
};
export const configApp = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_NEWS: {
      return {...state, fetching: true};
    }
    case getActionSuccess(Actions.GET_CONFIG_APP):
      return {
        ...state,
        data: action.data,
        error: action.error,
        fetching: false,
      };
    case getActionFail(Actions.GET_CONFIG_APP):
      return {
        ...state,
        data: null,
        error: action.error,
        fetching: false,
      };
    case getActionUnmount(Actions.GET_CONFIG_APP):
      return {...initialState};
    default:
      return state;
  }
};
export const configAppReducer = {configApp};
