import Class from '../utils/https.js'

class ClassicModels extends Class{
    getClassicData(sCallBack){
     this.request({
          url:"classic/latest",
          success:(data)=>{
          this.isLatesr(data.index)
          sCallBack (data)
          }
      })
    }
    getPreviousData(index,sCallBack){
        this.request({
            url:"classic/"+index+"/previous",
            success:(res)=>{
                sCallBack(res)
            }
        })
    }
    getNextData(index,sCallBack){
        this.request({
            url:"classic/"+index+"/next",
            success:(res)=>{
                sCallBack(res)
            }
        })
    }

    isLatesr(index){
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