const {default: axios} = require('axios')

const generateTaskQueue = require("./TaskQueue")

/**
 * 拦截策略是 所有处于请求队列的请求 一旦新来的请求url和method方法相同
 * 那么就自动拦截队列中的请求，移出队列并且将新的请求加入
 */

const  taskQueueManager =  generateTaskQueue()

axios.interceptors.request.use(
    config => {
        const newConfig = taskQueueManager.register(config)
        return newConfig;
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
        if (axios.isCancel(error)) {
          console.log("已取消的重复请求：" + error.message);
        }

        return Promise.reject(error);
    }
);

module.exports = axios;
