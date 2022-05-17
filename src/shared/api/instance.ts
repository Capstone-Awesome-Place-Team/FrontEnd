import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 3000, // 3초이후에 연결없으면 timout시킴
});

instance.interceptors.request.use(
  (config) => {
    const USER_TOKEN = `Bearer ${localStorage.getItem("token")}`; // 토큰으로 할시 필요

    USER_TOKEN !== "Bearer null" &&
      (config.headers!["Authorization"] = USER_TOKEN);

    config.headers!["Content-Type"] = "application/json; charset=utf-8";
    config.headers!["X-Requested-With"] = "XMLHttpRequest";
    config.headers!["Accept"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error); // 요청에러시 Promise.reject로 처리하여 error 값 리턴
  }
);
instance.interceptors.response.use(
  (response) => {
    const res = response.data; // 응답이오면 자동적으로 data 키에 값이 담긴다.
    return res;
  },
  (error) => {
    return Promise.reject(error); // 응답에러시 Promise.reject로 처리하여 error 값 리턴
  }
);

export default instance;
