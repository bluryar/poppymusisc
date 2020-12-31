import Axios from "axios";
import { Toast } from "vant";

let baseUrl = process.env.VUE_APP_BASE_URL;
const axios = Axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  withCredentials: true,
  params: {
    ts: new Date().getTime() // 让每个请求都带上时间戳
  }
});

// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response.data.code === 200) {
      return Promise.resolve(response);
    }
    if ("success" in response.data) {
      return Promise.resolve(response);
    }
    let msg = response.data.message ? response.data.message : "数据请求错误";
    Toast(msg);
    return Promise.reject(response);
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export { axios };
