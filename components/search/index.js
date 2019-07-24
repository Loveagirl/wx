// components/search/index.js
import Keyword from './keyword.js'
const keyword = new Keyword()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    history:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCancel(){
      this.triggerEvent('cancel',{},{})
    },
    onConfirm(event){
      keyword.setHistory(event.detail.value)
    }
  }
})
