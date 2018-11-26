// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgSrcArray: [
      '../../image/product/1.gif',
      '../../image/product/2.gif',
      '../../image/product/3.gif'
      ],
    imgSwiper:[
      '../../image/slide_1.jpg',
      '../../image/slide_2.jpg',
      '../../image/slide_3.jpg'
    ],
    price:[
      '¥ 158',
      '¥ 218',
      '¥ 88'
    ],
    name:[
      '爱艾贴',
      '艾水嫩',
      '艾眼贴'
    ],
    urlArray: [
      '../details/details?selectedForm=0',
      '../details/details?selectedForm=1',
      '../details/details?selectedForm=2'
    ],
    mode:'aspectFill'
  },
  
  allSaleClick:function(){
    wx.switchTab({
      url: '../index/index',
    })
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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