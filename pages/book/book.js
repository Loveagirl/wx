// pages/book/book.js
import BookModels from '../../models/book.js'
const Book = new BookModels()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book:[],
    show:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  methods:{
  
  },

  onLoad: function (options) {
    Book.getBookList().then(res=>{
      this.setData({
        book:res
      })
    })
  },
  onSearch:function(event){
    this.setData({
      show:true
    })
  },
  cancel:function(event){
    this.setData({
      show:false
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