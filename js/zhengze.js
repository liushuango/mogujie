window.onload=function(){
var inpuser=document.getElementById("inpuser");
var inppwd=document.getElementById("inppwd");
var dlk=document.getElementById("dlk");
 dlk.onclick=function(){
 	pattern=/^[1-9]\d{10}$/;
	if(inpuser.value==""){
		alert("账号不能为空或者输入有误")
		return;
	}

	if(inppwd.value==""){
		alert("密码不能为空")
		return;
	}


	alert("登录成功")

 location.href = 'mogujie.html';  


}





}



function reg(){
	var inphone=document.getElementById("inphone").value;
	var yzm=document.getElementById('yzm').value;
	pattern=/^[1-9]\d{10}$/;

	if(pattern.test(inphone)==false){
		alert("手机号码输入错误")
		return;
	}

	if(yzm==''){
		alert("请输入验证码")
		return;
	}

	alert("注册成功")
	 location.href = 'mogujie.html';  
}