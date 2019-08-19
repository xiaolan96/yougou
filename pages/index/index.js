import request from '../../utils/request.js'
//index.js
Page({
data:{
  autoplay:true,
  imgUrls: [
  ],
  menus:[],
  floors:[]
},
onLoad(){
  request({
    url: '/home/swiperdata'
  }).then(res=>{
    // 返回数组
    const {message} =res.data
    // 修改image
    this.setData({
      imgUrls:message
    })
  });

  // 请求菜单
  request({
    url:"/home/catitems"
  }).then(res=>{
    const {message} =res.data
    this.setData({
      menus:message
    })
  })

  // 请求楼层数据
  request({
    url:'/home/floordata'
  }).then(res=>{
    const {message} =res.data
    this.setData({
      floors:message
    })
  })
}
})
