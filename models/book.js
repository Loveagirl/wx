import HTTPSP from '../utils/https-p.js'

class Books extends HTTPSP{
   getBookList(){
    return this.request({
        url:"/book/hot_list",
     })
   }
   getBookDetail(id){
      return this.request({
         url:`/book/${id}/detail`
      })
   }
   getBookComment(id){
      return this.request({
         url:`/book/${id}/short_comment`
      })
   }
}

export default Books

 