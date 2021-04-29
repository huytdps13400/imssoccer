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

export const tokenApp = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_TOKEN: {
      return {...state, fetching: true};
    }
    case getActionSuccess(Actions.GET_TOKEN): {
      return {...state, token: action.data, error: null, fetching: false};
    }
    case getActionFail(Actions.GET_TOKEN): {
      return {...state, token: null, error: action.error, fetching: false};
    }
    case getActionUnmount(Actions.GET_TOKEN): {
      return {...initialState};
    }
    default:
      return state;
  }
};
export const tokenUser = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_TOKEN_USER: {
      return {...state, token: action.tokenUser};
    }
    case getActionUnmount(Actions.SET_TOKEN_USER):
      return {...initialState};
    default:
      return state;
  }
};

export const TokenReducer = {tokenApp, tokenUser};
