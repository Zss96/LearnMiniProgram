//index.js
//要创建页面对象
//获取应用实例
const app = getApp()

//要创建页面对象
Page({
  data: {
    motto: 'Hello World',
    testname: "Hello 小程序",
    students: [
      { id: 111, name: "zss", age: 22 },
      { id: 112, name: "zzj", age: 23 },
      { id: 113, name: "zcl", age: 24 },
      { id: 114, name: "zhr", age: 25 },
    ],
    counter: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  addcounter() {
    //1错误做法：界面是不会刷新的
    //this.data.counter +=1
    //console.log(this.data.counter)

    //2this.setData()
    this.setData({
      counter: this.data.counter+1
    })
  },
  subtractioncounter() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  //生命周期函数
  //小程序初始化完成时，会执行的生命周期函数
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShow: function () {
    console.log()
  },

})
