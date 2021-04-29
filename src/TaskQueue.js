const {default: axios} = require('axios')
const CancelToken = axios.CancelToken;
const { generateMapKey } = require("./utils")

class TaskQueue {
    constructor() {
        this.taskMap = new Map()
    }

    register(config) {
        const mapKey = generateMapKey(config.method,  config.url)
        if(this.taskMap.has(mapKey)) {
            // 请求已经存在
            const cancel = this.taskMap.get(mapKey)
            if(cancel) cancel()
        }

        let cancel

        const cancelToken = new CancelToken(function executor(c){
            cancel = c
        }) 

        this.taskMap.set(mapKey,  cancel)

        return {
            ...config,
            cancelToken
        }
    }
}

let instance = null

module.exports = () => {
    if(!instance) {
        instance = new TaskQueue()
    }
    return instance
}