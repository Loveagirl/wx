// pages/classic/classic.js
import ClassicModels from '../../models/classic.js'
import LikeModels from '../../models/like.js'
var classicModels = new ClassicModels()
var likeModels = new LikeModels()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic:null
  },

  onLike:function(event){
    console.log(event.detail.detail)
     likeModels.like(event.detail.detail,this.data.classic.id,this.data.classic.type)
     console.log("123")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModels.getClassicData((data)=>{
      console.log(data)
      this.setData({
        classic:data
      })
    })
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