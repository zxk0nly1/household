// components/guakao/guakao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  }, 
  callFn(){
    wx.makePhoneCall({
      phoneNumber: '1340000000'
    })
  },
  toTop(e){
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  map(){
    wx.navigateTo({
      url: '/pages/map/map',
    })
  }
})