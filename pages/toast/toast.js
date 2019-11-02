// pages/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleShowToast(){
    wx.showToast({
      title: '加载中',
      duration: 2000,
      icon: 'loading',
      mask: true
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容,哈哈',
      //showCancel: false,//不用取消按钮
      cancelText: '退出',//改名字
      success: function(res){
        console.log(res)
        if(res.cancel){
          console.log('用户点击了取消按钮')
        }
        if(res.confirm){
          console.log('用户点击了确定按钮')
        }
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
      mask: true
    })
    setTimeout(()=> {
      //必须要调用hideLoading才会调用消失
      wx.hideLoading()
    },1000)
  },
  handleShowAction()  {
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      itemColor: 'red',
      success: function(res){
        console.log(res)
      }
    })
  },

  onShareAppMessage: function(options){
    return {
      'title': '你好啊,xxx',
      path: '/pages/about/about'
    }
  }
  
})