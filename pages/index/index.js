Page({
  data: {
    background: [
      '/images/home/01banner1.jpg',
      '/images/home/01banner2.jpg'
    ],
    autoplay: false,
    interval: 2000,
    duration: 500,
    num: 0,
    background1: [
      '/images/home/03banner1.jpg',
      '/images/home/03banner2.jpg'
    ],
    autoplay1: true,
    interval1: 2000,
    duration1: 500,
    num1: 0
  },
  changeFn(e){
    // event 事件对象  e  ev
    // console.log(e.detail.current);  // 得到第几张图片处于当前状态
    // 如何修改小程序的data
    this.setData({
      num: e.detail.current
    });
  },
  changeFn1(e) {
    // event 事件对象  e  ev
    // console.log(e.detail.current);  // 得到第几张图片处于当前状态
    // 如何修改小程序的data
    this.setData({
      num1: e.detail.current
    });
  }
  
})