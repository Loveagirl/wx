// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    First:{
      type:Boolean,
      value:true
    },
    Latest:{
      type:Boolean,
      value:false
    },  
  },

  /**
   * 组件的初始数据
   */
  data: {
     disLeft:"./images/triangle.dis@left.png",
     left:"./images/triangle@left.png",
     disRight:"./images/triangle.dis@right.png",
     right:"./images/triangle@right.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft(){
      if(!this.properties.Latest){
        this.triggerEvent('left',{},{})
      }   
    },
    onRight(){
      if(!this.properties.First){
        this.triggerEvent('right',{},{})
      } 
    }
  }
})
