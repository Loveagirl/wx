import Class from '../utils/https.js'

class ClassicModels extends Class{
    getClassicData(sCallBack){
     this.request({
          url:"classic/latest",
          success:(data)=>{
          this._isLatesr(data.index)
          sCallBack (data)
          }
      })
    }
    getNextorPreData(index,NextorPre,sCallBack){
        let key =NextorPre == 'next' ? this._setKey(index+1) : this._setKey(index-1)
        let value=wx.getStorageSync(key)
        if(value){
            sCallBack(value)
        }else{
            this.request({
                url:`classic/${index}/${NextorPre}`,
                success:(res)=>{
                    sCallBack(res)
                    console.log("123")
                    wx.setStorageSync(this._setKey(res.index),res)
                }        
            })
        }   
    }
    
   

    _setKey(index){
        return "classic"+index
    }

    _isLatesr(index){
        wx.setStorageSync('index', index)
    }
    
    getLatest(nowIndex){
        let index = wx.getStorageSync('index')
       if( nowIndex == index ){
           return true
       }else{
           return false
       }
    }
    isFirsts(index){
        if (index==1){
          return true
        }
        else return false
     }
    
}

export default ClassicModels