// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服','裤子','鞋子']
  },
  handleBtnClick(){
    console.log('按钮发生点击事件')
  },
  handleTouchStart(){
    console.log('start')
  },
  handleTouchMove() {
    console.log('Move')
  },
  handleTouchEnd() {
    console.log('end')
  },
   handleTap() {
    console.log('handleTap')
  },
  handleLongPress() {
    console.log('longpress')
  },
  handleEventClick(event) {
    console.log('---------',event)
  },
  handleEventEnd(event){
    console.log('+++++',event)
  },
  handleItemClick(event){
    console.log(event)
  }
})