class Keyword{
    max=10
    key='q'
    setHistory(value){
      var keywords = this.getHistory()  
      console.log(keywords)
      if(!keywords){
        keywords=[value]
      }else{
      var index=keywords.includes(value)
      if(!index){
          if(keywords.length>this.max){
           keywords.pop()
          }
          keywords.unshift(value)
      }  
    }
    wx.setStorageSync(this.key, keywords)
    }
    getHistory(){
     return wx.getStorageSync(this.key) 
    }
}
export default Keyword