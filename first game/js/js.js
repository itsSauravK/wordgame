var myVar;
var endtime=5;
var i=0;
var score=0;	
	var list=['agent','agree','agreement','ahead','allow','almost',
'alone','along','already','although','always','American','among',
'amount','analysis','and','animal','another','answer','any','anyone','anything',
'appear','apply','approach','area','argue','arm','around','arrive','art','article','artist'];

function start(){
	clearInterval(myVar);
	endtime=5;
	timer.innerHTML=endtime;
	text.value='';
	console.log("START");
	 myVar=setInterval(function(){;
	var timer= document.querySelector('#timer');
	var text=document.querySelector('#text');
	var words=document.querySelector('#words');
	var change=document.querySelector('#change')
	change.innerHTML=score;
	//var scorer=document.querySelector('#score');
	text.disabled=false;

	if(endtime>0){
	endtime--;
	timer.innerHTML=endtime;
	game();
	//text.enabled=true;
	}else{
		stop();
	}


	

},1000);

	


		
}
function stop(){
	console.log("stop");
	clearInterval(myVar);
	endtime=0;
	words.innerHTML="GAME OVER!";
		text.disabled=true;
		text.value='SCORE:'+score;
		score=0;
}
	
function game(){




words.innerHTML=list[i];
addEventListener('keyup',click);
removeEventListener('keyup',click());	


}	
function click(evt) {
	if(evt.keyCode==13)
	{	console.log("ENTER PRESSED");
		if(list[i]===text.value)
	{	endtime=5;
		text.value='';
		score+=20;
		console.log(score);
		change.innerHTML=score;
		i++;
	}
	else{
		
		stop();
		text.value='';
		//score-=10;
		console.log(score);
		//change.innerHTML=score;
			}
		//	evt.keyCode=0;
	}
	
}

	// body...

	//if(endtime>0)
	//	start();
	//else{
	//	word.disabled=true;
	



