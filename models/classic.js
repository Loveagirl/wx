import Class from '../utils/https.js'

class ClassicModels extends Class{
    getClassicData(sCallBack){
     this.request({
          url:"classic/latest",
          success:(data)=>{
          sCallBack (data)
          }
      })
    }
}

export default ClassicModels