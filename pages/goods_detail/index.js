import request from "../../utils/request.js"
// pages/goods_detail/index.js
Page({
  /**
   * 页面加载初始数据
   */
  data:{
    // 商品详情
    detail:{}

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options){
    const {id} = options;

    // 请求商品详情
    request({
      url:'/goods/detail',
      data:{
        goods_id:id
      }
    }).then(res=>{
      const {message} = res.data

      this.setData({
        detail:message
      })
    })
  }
})