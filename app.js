//app.js
App({
  //对象:小程序
  globalData: {
    token: ''
  },
  onLaunch: function () {
    //1.先从缓存中取出token
    const token = wx.getStorageSync('token')
    //判断token是否有值
    if(token &&token.length !==0 ){//
      this.check_token(token)//验证token是否过期
    }else {//没有token,进行登录操作
      this.login()
    }
   
  },
  check_token(token) {
    console.log('token操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success:(res)=>{
        console.log(res)
        if(!res.data.errCode){
          this.globalData.token = token;
        }else {
          this.login()
        }
      },
      fail: function(err){
        console.log(err)
      }
    })
  },
  login() {
    console.log('login操作')
    // 登录操作
    wx.login({
      //code只有5分钟的有效期
      success: res => {
        console.log(res)
        // 1.获取code
        const code = res.code;
        //2.将code发送给服务器接口
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'POST',
          data: {
            code: code
          },
          success: (res) => {
            console.log(res)
            const token = res.data.token;
            //将token保存在globalData中
            this.globalData.token = token;

            //进行本地存储
            wx.setStorageSync("token", token)

          }
        })

      }
    })
  }
   
})