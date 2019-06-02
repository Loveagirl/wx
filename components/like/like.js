// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    star:Number,
    like:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
     isLike:'./image/like.png',
     noLike:'./image/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(){
     var like=this.properties.like;
     var star =this.properties.star;
     star= like?star-1:star+1
     this.setData({
       like:!like,
       star:star
     })
     var detail = this.properties.like?'like':'cancel'
     this.triggerEvent('like',{
       detail:detail
     },{})
    }
  }
})
