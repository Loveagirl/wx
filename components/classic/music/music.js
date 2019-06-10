// components/classic/music/music.js
var myBehavior = require('../classic-behavior')
const mMgr=  wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
 
  behaviors:[myBehavior],
  properties: {
    musicUrl:String,
    title:String
  },
  attached:function(){ 
   this._getStatus()
   this._checkStatus()
  },
  /**
   * 组件的初始数据
   */
  data: {
    playing:false,
    musicTagImg:"./images/music@tag.png",
    play:"./images/player@waitting.png",
    stop:"./images/player@playing.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeStatus(){
      if(this.data.playing){
        this.setData({
          playing:false
        })
        mMgr.pause()
      }else{
        this.setData({
          playing:true
        })
        if(mMgr.src == this.properties.musicUrl){
          mMgr.play()
        }
        else{
          mMgr.src = this.properties.musicUrl
        }
         mMgr.title = this.properties.title
      }
    },
    _getStatus(){
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if(mMgr.src==this.properties.musicUrl){
        this.setData({
          playing:true
        })
      }
    },
    _checkStatus(){
      mMgr.onPlay(()=>{
        this._getStatus()
      })
      mMgr.onPause(()=>{
        this._getStatus()
      })
      mMgr.onStop(() => {
        this._getStatus()
      }),
      mMgr.onEnded(()=>{
        this._getStatus()
      })
    }

  }
})
