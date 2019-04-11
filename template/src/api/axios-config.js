import axios from 'axios';

const http = axios.create({
    // baseURL: 'https://news-at.zhihu.com',
    timeout: 10000
});

// 请求拦截
http.interceptors.request.use(config => {
    const method = config.method.toLowerCase()
    // 加入请求时间戳
    if (method === 'post' || method === 'put') {
    } else if (method === 'get') {
        if (!config.params) config.params = {}
        config.params.requestTime = Date.now()
    }
    return config;
}, error => {
    return Promise.reject(error)
})

// 返回拦截
http.interceptors.response.use(response => {
    // 对接口返回做统一处理, 这里要跟后台约定好接口异常返回的数据格式
    // switch (response.data.code) {
    //     case 401: return Promise.reject({isInvalidToken: true});break
    //     case 404: return Promise.reject({message: '接口不存在'});break
    //     case 500: return Promise.reject({message: '服务器失联了，请稍候再试'});break
    //     case 5001: return Promise.reject({message: '服务器失联了，请稍候再试'});break
    //     default: return Promise.resolve(response.data);
    // }
    return Promise.resolve(response.data);
}, error => {
    return Promise.reject(error);
})

export default http
