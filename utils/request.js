/**
 * 封装一个类似axios的的请求工具库
 * 
 * axios例子
 * 1.设置基准路径
 * axios.defaults.baseURL =""
 * 
 * 2.发起请求，返回的是promise
 * axios({参数}).then().catch()
 * 
 * 3.监听错误
 * axios.onError(回调函数)
 * 
 * 封装思路：
 * 采用单例的封装模式 
 * */
const request =function(config ={}){
  // url为空
  if(!config.url){
    throw new Error('请输入url地址')
    return
  }


  // 拼接baseURL
  // 条件是config.url开头是否包含http或者https
  // 如果包含了http不加上默认的baseURL
  // search的使用：https://w3school.com.cn/jsref_search.asp
  if(config.url.search(/^http/)===-1){
    config.url = request.defaults.baseURL + config.url
  }



  // 返回一个promise，resole是成功的回调，reject是失败
  return new Promise((resole,reject)=>{
    // 发起小程序请求
    wx.request({
      // 用调用传入的对象解构
      ...config,
      success(res){
        // 成功之后触发的回调
        resole(res)
      },
      fail(){},

      // 后台接口
      complete(res){
        // 循环调用错误函数
        request.errors.forEach(fn=>{
          fn(res)
        })
      }
    })
  })
}
//  发起请求

// request的默认属性
 request.defaults = {
  //  基准路径
   baseURL:""
 }


//  保存错误函数
request.errors = [];
/**
 * 接收错误的触发函数
 * 参数：callback | 传入错误函数
 */
request.onError =function(callback){
  // 先保存到数组中，请求错误的时候统一调用
  request.errors.push(callback)
}

export default request