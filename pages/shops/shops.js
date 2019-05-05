// pages/shops/shops.js
const data = require('../../data/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
      shopArr:[],
      shopConut:[],
      showBg:false,
      showModles:false,  
      variable:1,  
      hide:false
  },
  stop(options) {
    let shopData = data.dataList[2]
    for (var i = 0; i < shopData.length; i++) {
      if (options.id == shopData[i].id) {
        this.setData({
          shopArr: shopData[i],
        })
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let than =this;
    than.stop(options)
    wx.setNavigationBarTitle({
      title: options.title
    })

    var postId =options.id
    this.data.currentPostId = postId;

    var postsCollected = wx.getStorageSync('posts_collected')
    if (postsCollected) {   
      var postCollected = postsCollected[postId]
      this.setData({
        collected: postCollected
      })

    } else {  
      var postsCollected = {}; 
      postsCollected[postId] = false; 
       wx.setStorageSync('posts_collected', postsCollected);
    }
    
  },
  
  onCollectionTap: function (event) {
    var postsCollected = wx.getStorageSync('posts_collected'); 
    var postCollected = postsCollected[this.data.currentPostId]; 
    postCollected = !postCollected;// 取反操作
    postsCollected[this.data.currentPostId] = postCollected;
    wx.setStorageSync('posts_collected', postsCollected);//更新文章是否收藏的缓存值。
    //更新Data的数据绑定变量
   this.setData({
    collected: postCollected //当前的
    })
    wx.showToast({
      title: this.data.collected?"关注成功":"取消关注",
      icon: "success"
    })
  },
  showMolde(){
    let showModles =this.data.showModles=true;
    this.setData({
      showModles: showModles
    })
  },
  hide(){
    this.setData({
      showModles: !this.data.showModles
    })
  },
  //点击数量减少
  reduction(){
    var variable = this.data.variable; 
    variable--;
    if (variable<=1){
      variable=1;
      wx.showToast({
        title: '最少购买一件',
        icon:"none"
      })
    }
    this.setData({
      variable: variable
    })
  },
  //点击增加
  add(){
    var variable = this.data.variable; 
    variable++;
    this.setData({
      variable: variable
    })
  },
  //确定数量
  selected(){
    this.setData({
      showModles: !this.data.showModles
    })
    wx.showToast({
      title: '选择成功',
      icon:"none"
    })
  }
})