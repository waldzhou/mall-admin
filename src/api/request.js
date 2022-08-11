 import axios from "axios";
 const ins = axios.create({ baseURL: 'https://mallapi.duyiedu.com/' }); //创建一个axios实例

 ins.interceptors.request.use((config) => { return config; },
     (err) => { Promise.reject(err) });

 ins.interceptors.response.use((res) => {
     if (res.data.status === 'fail') {
         return Promise.reject(res.data.msg);
     }
     return res.data.data;
 }, err => {
     Promise.reject(err);
 })

 export default ins;