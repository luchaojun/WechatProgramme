Page({
  data: {
    inputValue:'' ,
    dataItems:''
  },
  bindkeyInput: function(e){
    this.setData({inputValue: e.detail.value});
  },
  select_btn: function(){
    var lds = this;
    wx.request({
      url: 'http://172.16.7.61:8080/getProductProgressBySaleOrder',
      data: {
        saleOrder: this.data.inputValue
      },
      method: "GET",
      success(res){
        lds.setData({dataItems: res.data});
        console.log(lds.data.dataItems)
      }
    })
  }
})