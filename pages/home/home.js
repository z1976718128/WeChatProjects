//home.js
//导出数据
const data = require('../../data/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Acrab:[]
  },
  goShops:function(e){
    // console.log(e)
    var shopId = e.currentTarget.dataset.id
    var than =this
    let arr2 = than.data.Acrab
    for(var i=0;i<arr2.length;i++){
      let shop = arr2
      wx.navigateTo({
        url: '/pages/shops/shops?id=' + shopId + '&title=' + shop[shopId-1].text,
        // 
      })
    }
     
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      dataList: data.dataList[0],
      news: data.dataList[1],
      Acrab: data.dataList[2],

    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
