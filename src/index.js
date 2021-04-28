const {default: axios} = require('axios')

axios.interceptors.request.use(
    config => {
      return config;
    },
    error => {
       return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
       return response;
    },
    error => {
        // if (axios.isCancel(error)) {
        //   console.log("已取消的重复请求：" + error.message);
        // } else {
        //   // 添加异常处理
        // }
        return Promise.reject(error);
    }
);

module.exports = axios;
