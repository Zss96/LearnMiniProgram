// pages/home/home.js
import request from '../../service/network.js'
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
    //1.原生的方式发送网络请求
    this.get_data_origin()
    //2.使用封装的request发送网络请求
    request({
      url: "http://106.54.54.237:8000/api/v1/recommend",
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  get_data_origin() {
    //---------------1原生----------
    //发送网络请求
    //最简单的get请求
    // wx.request({
    //   url:   "http://106.54.54.237:8000/api/v1/recommend",
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
    // //get请求带参数
    // wx.request({
    //   url: "http://106.54.54.237:8000/api/v1/home/data",
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
    // //post请求
    // wx.request({
    //   url: "http://httpbin.org/post",
    //   method:'POST',
    //   data: {
    //     name: 'zss',
    //     age: 18
    //   },
    //   success: function(res){
    //     console.log(res)
    //   },
    //   fail: function(err){
    //     console.log(res)
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})