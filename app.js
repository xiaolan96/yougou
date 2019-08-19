import request from './utils/request.js'
//app.js
App({
  // 项目运行的时候触发，只执行一次
  onLaunch:function(){
    request.defaults.baseURL = "https://api.zbztb.cn/api/public/v1"
  }
})