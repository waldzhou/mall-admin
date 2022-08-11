import ins from "./request";

// 登录
export function login(params) {
    return ins.post('/passport/login', params);
}

// 注册
export function logon(params) {
    return ins.post('/passport/logon', params);
}

// 获取验证码
export function getCode(params) {
    return ins.post('/passport/getCode', params);
}