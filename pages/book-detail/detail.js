// pages/book-detail/detail.js
import BookModels from '../../models/book.js'
import Like from '../../models/like.js'
const LikeModel = new Like()
const Book = new BookModels()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book:{},
    comments:[],
    posting:false,
    star:0,
    like:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const id =options.bid;
    Book.getBookDetail(id).then(res=>{
      this.setData({
        book:res
      })
    })
    Book.getBookComment(id).then(res=>{
      this.setData({
        comments:res.comments
      })
      console.log(this.data.comments)
    })
    Book.getBookFavor(id).then(res=>{
      this.setData({
        star:res.fav_nums,
        like:res.like_status
      })
    })
  },
 
  onLike(event){
   console.log(event.detail.detail)
   LikeModel.like(event.detail.detail,this.data.book.id,400)
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