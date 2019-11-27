// components/guakao/guakao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    company:{
      address:'广东海洋大学寸金学院',
      youbian:'500000'
    },
    service:{
      hotline:'1234567890',
      workday:'周一至周日',
      email:'1272667023@qq.com'

    }
  },
  toTop(e) {
    wx.pageScrollTo({
      scrollTop: 0,
    })
  }
})