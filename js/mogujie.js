window.onload=function (){
	test()
	function test(){
	var iNow= new Date();
	var iNew= new Date(2017,8,1,18,0,0);
	var t=  Math.floor((iNew - iNow)/1000);
	var myHour=Math.floor(t%86400/3600);
	var myMin=Math.floor(t%86400%3600/60);
	var mySec=t%60;
	document.getElementById("myHours").innerHTML=time(myHour);
	document.getElementById("myMins").innerHTML=time(myMin);
	document.getElementById("mySecs").innerHTML=time(mySec);
	}

	function time(n){
		if(n<10){
			return "0" + n;
		}else{
			return n;
		}
	}
	setInterval(test,1000)
}











