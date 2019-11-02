// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },
  onUnload(){
    console.log('页面退出')
    //1.获取首页的页面对象
    //getCurrentPages当前所有活跃(栈的页面
    const pages = getCurrentPages()
    const home = pages[pages.length -2]
    console.log(pages)

    //2.调用页面对象的setData
    home.setData({
      title: '呵呵呵呵'
    })
  },
  handleBackHome() {
    wx.navigateBack({
      delta: 1 //返回层级
    })
  }
})