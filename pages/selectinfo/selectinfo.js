Page({
  data: {
    inputValue: '' ,
    viewHidden: 'true',
    allItems: ''
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
        if (res.data.length > 0){
          lds.setData({viewHidden: 'true'});
          lds.setData({allItems: res.data});
          console.log(lds.data.dataItems);
        }
      }
    })
  },
  select_all: function(){
    var lds = this;
    wx.request({
      url: 'http://172.16.7.61:8080/getAllProductProgress',
      method: "GET",
      success(res){
        lds.setData({allItems: res.data});
        console.log(lds.data.allItems);
      }
    })
  }
})