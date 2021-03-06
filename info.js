// pages/info/info.js
const db=wx.cloud.database()
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:""
  },
  jumpPwd(event){
    wx.navigateTo({
      url: '../pwd/pwd',
    })
  },
  getData(){
    let loginAccount = app.userName
    console.log(loginAccount)
    db.collection("read").where({
      loginAccount:loginAccount
    }).get({
        success:res=>{
           console.log("获取数据成功", res)
            this.setData({
              user:res.data[0]
            })
        },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
    console.log(this.data.user)
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