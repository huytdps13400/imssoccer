import Actions, {
  getActionFail,
  getActionSuccess,
  getActionUnmount,
} from '../actions';

const initialState = {
  data: [],
  error: null,
  totalPage: null,
  fetching: false,
};

export const news = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_NEWS: {
      return {...state, fetching: true};
    }
    case getActionSuccess(Actions.GET_NEWS): {
      return {
        ...state,
        data: [...state.data, ...action.data.data],
        error: action.error,
        totalPage: action.data.total_page,
        fetching: false,
      };
    }
    case getActionFail(Actions.GET_NEWS): {
      return {...state, data: null, error: action.error, fetching: false};
    }
    case getActionUnmount(Actions.GET_NEWS): {
      return {...initialState};
    }
    default:
      return state;
  }
};

export const newsGroup = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_NEWS_GROUP: {
      return {...state, fetching: true};
    }
    case getActionSuccess(Actions.GET_NEWS_GROUP): {
      return {
        ...state,
        data: action.data.data,
        totalPage: action.data.total_page,
        error: action.error,
        fetching: false,
      };
    }
    case getActionFail(Actions.GET_NEWS_GROUP): {
      return {...state, data: null, error: action.error, fetching: false};
    }
    case getActionUnmount(Actions.GET_NEWS_GROUP): {
      return {...initialState};
    }
    default:
      return state;
  }
};

export const newsbyGroup = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_NEWS_BY_GROUP: {
      return {...state, fetching: true};
    }
    case getActionSuccess(Actions.GET_NEWS_BY_GROUP): {
      return {
        ...state,
        data: action.data.data,
        totalPage: action.data.total_page,
        error: action.error,
        fetching: false,
      };
    }
    case getActionFail(Actions.GET_NEWS_BY_GROUP): {
      return {...state, data: null, error: action.error, fetching: false};
    }
    case getActionUnmount(Actions.GET_NEWS_BY_GROUP): {
      return {...initialState};
    }
    default:
      return state;
  }
};
export const newsDetails = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_NEWS_DETAIL: {
      return {...state, fetching: true};
    }
    case getActionSuccess(Actions.GET_NEWS_DETAIL): {
      return {
        ...state,
        data: action.data.data,
        totalPage: action.data.total_page,
        error: action.error,
        fetching: false,
      };
    }
    case getActionFail(Actions.GET_NEWS_DETAIL): {
      return {...state, data: null, error: action.error, fetching: false};
    }
    case getActionUnmount(Actions.GET_NEWS_DETAIL): {
      return {...initialState};
    }
    default:
      return state;
  }
};
export const NewsReducer = {news, newsGroup, newsbyGroup, newsDetails};
