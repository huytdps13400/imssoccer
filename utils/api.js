import store from '../src/redux/store';
import axios from 'axios';

//ROOT DOMAIN
// axios.defaults.baseURL = 'http://imsnews.thietkewebsite.info.vn/api.php/';
axios.defaults.baseURL = 'http://imsnewsios.thietkewebsite.info.vn/api.php/';

const getDataBody = config => {
  let data = '';
  if (
    config.data &&
    config.headers['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    for (const key in config.data) {
      data = data + `${key}=${config.data[key]}&`;
    }
    data = data.slice(0, data.length - 1);
  } else {
    data = config.data;
  }
  return data;
};

axios.interceptors.request.use(
  config => {
    const data = getDataBody(config);
    if (__DEV__) {
      console.log(
        '%c [HTTP Interceptor Request]',
        'color: blue; font-weight: bold',
        config,
      );
    }
    return {...config, data};
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    if (__DEV__) {
      console.log(
        '%c [HTTP Interceptor Response]',
        'color: #248c1d; font-weight: bold',
        response,
      );
    }
    return response;
  },
  error => {
    if (__DEV__) {
      console.log(
        '%c [HTTP Interceptor Response Error]',
        'color: red; font-weight: bold',
        error,
      );
    }
    return Promise.reject(error);
  },
);

export default class API {
  static generateHeader() {
    let options = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    };

    const token = store.getState().tokenApp.token;
    if (token) {
      options = {
        ...options,
        Authorization: `Bearer ${token}`,
      };
    }
    return options;
  }

  static generateHeaderImage(headers) {
    headers = headers !== null ? headers : {};
    let options = {
      'Content-Type': headers,
      Accept: 'application/json',
    };
    if (store.getState().tokenApp.token !== null) {
      options = {
        ...options,
        Authorization: `Bearer ${store.getState().tokenApp.token}`,
      };
    }
    return options;
  }

  static async get(url, params) {
    try {
      return await axios
        .get(url, {
          headers: {
            get: this.generateHeader(),
          },
          params: params,
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  static async post(url, body, params) {
    try {
      return await axios
        .post(url, body, {
          headers: {
            post: this.generateHeader(),
          },
          params: params,
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }

  static async postImage(url, formdata) {
    try {
      return await axios
        .post(url, formdata, {
          headers: {
            post: this.generateHeaderImage('form-data'),
          },
        })
        .then(response => response.data);
    } catch (error) {
      throw error.response;
    }
  }
}
