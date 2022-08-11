import Cookies from "js-cookie";

/**
 * 设置cookie
 */
export function setUserCookie(userInfo = {}) {
    // 将userInfo转化为数组
    const arr = Object.entries(userInfo);
    for (let i = 0; i < arr.length; i++) {
        Cookies.set(arr[i][0], arr[i][1]);
    }
}

/**
 * 获取cookie
 */
export function getUserCookie() {
    return {
        username: Cookies.get('username'),
        email: Cookies.get('email'),
        appkey: Cookies.get('appkey'),
        role: Cookies.get('role'),
    };
}

/**
 * 删除cookie
 */
export function removeUserCookie() {
    Cookies.remove('username'),
        Cookies.remove('email'),
        Cookies.remove('appkey'),
        Cookies.remove('role')
}