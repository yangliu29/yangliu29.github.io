

//
var r,t = 0;
var timeID,speedCtrl = 1500;

var showTime,hours,min,second,myScore = 0;

//获取鼠地数组
var gameArr = document.querySelectorAll(".gameArea ul li");

//获取点击按钮
var startBtn = document.getElementById("start");
var pauseBtn = document.getElementById("pause");
var stopBtn = document.getElementById("stop");

//显示信息元素获取
var gameTime = document.querySelector(".gameInfo .time");

var score = document.querySelector(".gameInfo .score");

var hint = document.querySelector(".gameInfo .hint");

//注册点击事件
for(var i =0;i < gameArr.length;i++){
	gameArr[i].onclick = function(){
		if(this.mark == true){
			
			this.style.backgroundImage = 'url(images/02.jpg)'
			
			//分数累加
			myScore += 100;
			score.firstElementChild.innerText = myScore + '分';
			
			//激励信息
			if(500 <= myScore && myScore < 1500){
				hint.innerText = '小试牛刀！';
			}else if(1500 <= myScore && myScore < 3000){
				hint.innerText = 'You Can Do Best !';
			}else if(3000 <= myScore && myScore < 5000){
				hint.innerText = '哎呦不错哦！';
			}else if(5000 <= myScore && myScore < 7000){
				hint.innerText = '你已经成功超越了80%的人';
			}else if(7000 <= myScore && myScore < 9000){
				hint.innerText = '你这么NB你家里人知道吗？';
			}else if(myScore >= 9000 ){
				hint.innerText = '手速这么快？是那啥的吗。。。'
			}
		}
	}
}


//开始
//注册开始点击事件
startBtn.onclick = start;


function start(){
	
	//清空开始点击事件
	startBtn.onclick = '';
	
	timeID= setInterval(function (){
		
		speedCtrl -= 10;
		
		//随机出现
		r = parseInt(Math.random() * gameArr.length);
		console.log(r);
		//添加有老鼠属性标记
		gameArr[r].mark = true;
		gameArr[r].style.backgroundImage = 'url(images/01.jpg)';
		
		//延时将标记清空
		setTimeout(function (){
			gameArr[r].mark = false;
			gameArr[r].style.backgroundImage = 'url(images/00.jpg)';
		},(speedCtrl - 150));
		
		
	},speedCtrl);
	
	//显示游戏时间
	gameInfo();
}

//暂停 
pauseBtn.onclick = function (){
	//结束定时器
	clearInterval(timeID);
	
	//重新给开始点击事件
	startBtn.onclick = start;
	
	
	//暂停计时但不清空游戏信息
	clearInterval(showTime);
}


//停止
stopBtn.onclick = function (){
	//结束定时器
	clearInterval(timeID);
	
	//重新给开始点击事件
	startBtn.onclick = start;
	
	//清空游戏信息
	clearInterval(showTime);
	t = 0;
	gameTime.firstElementChild.innerText = '';
	
	score.firstElementChild.innerText =" ";
	myScore = 0;
	
	hint.innerText = '';
}


//统计信息

//时间
function gameInfo(){
	
	showTime = setInterval(function (){
	t++;
	hours = parseInt(t / 3600) < 10 ? '0' + parseInt(t / 3600) : parseInt(t / 3600);
	min = (parseInt(t / 60) % 60) < 10 ?'0' + (parseInt(t / 60) % 60) : (parseInt(t / 60) % 60);
	second = (t % 60) < 10 ? '0' + (t % 60) : (t % 60);
	gameTime.firstElementChild.innerText = hours + ':' + min +':' + second;
	
},1000);
}




