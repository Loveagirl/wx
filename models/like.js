import Class from '../utils/https'

class LikeModels extends Class{
    like(whatThis,id,type){
    var url= whatThis=='like'?'like':'like/cancel';
    this.request({
        url:url,
        method:"POST",
        data:{
            art_id:id,
            type:type
        },
        success:function(res){
            console.log(res)
        }
      })
    }
    getClassicLikeStatus(id,type,sCallBack){
      this.request({
          url:`classic/${type}/${id}/favor`,
          success:function(res){
              sCallBack(res)
          }
      })
    }
}

export default LikeModels