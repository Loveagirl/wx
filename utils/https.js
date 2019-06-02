import {config} from '../config.js'
class HTTPS{
    request(params){
        
            wx.request({
                url:config.api_base_url+params.url,
                data:params.data || "",
                header:{
                    'content-type': 'application/json',
                    "appkey":config.appkey
                },
                method:params.method || 'get' ,
                success:function(res){
                   params.success(res.data) 
                },
                fail:function(error){
                    
                }
              })
         
    }
}

export default HTTPS