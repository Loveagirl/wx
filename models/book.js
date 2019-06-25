import HTTPSP from '../utils/https-p.js'

class Books extends HTTPSP{
   getBookList(){
    return this.request({
        url:"/book/hot_list",
     })
   }

}

export default Books

 