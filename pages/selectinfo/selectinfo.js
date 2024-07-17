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
      url: 'http://192.168.1.100:8080/getUserById',
      data: {
        id: this.data.inputValue
      },
      method: "GET",
      success(res){
        lds.setData({dataItems: res.data});
        console.log(lds.data.dataItems)
      }
    })
  }
})