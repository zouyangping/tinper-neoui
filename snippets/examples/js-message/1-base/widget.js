var msgBtn = document.body.querySelector("#msgBtn");
var rightInfo='<i class="fa fa-check-circle margin-r-5"></i>成功信息!!!';
u.on(msgBtn,'click', function(){ 
    u.showMessage({msg:rightInfo,position:"center"})
})