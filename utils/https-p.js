import {config} from '../config.js'
class HTTPSP{
    request(params){
            return new Promise((resolve,reject)=>{
                wx.request({
                    url:config.api_base_url+params.url,
                    data:params.data || "",
                    header:{
                        'content-type': 'application/json',
                        "appkey":config.appkey
                    },
                    method:params.method || 'get' ,
                    success:function(res){
                      resolve(res.data)
                    },
                    fail:function(error){
                        reject(error)
                    }
                  })
            })
          
         
    }
}

export default HTTPSP