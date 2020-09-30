// difined variavles to hold time values 
let min=0,sec=0,hour=0;
//  display time 
let displayMin=0,displaySec=0,displayHour=0;
// the function 
function stopWatch(){
	sec++


	if(sec/60 === 1){
		sec=0
		min++


		if(min/60 ===1){
			min =0
			hour++
		}
	}
	if (sec<10){
		displaySec="0"+sec
		
console.log (displaySec)
	}

	else{
		displaySec=sec
		
	}
	if (min<10){
		displayMin="0"+min
	}
	else{
		displayMin=min
		
	}
	if (hour<10){
		displayHour="0"+hour
	}
	else{
		displayHour=hour
		
	}
	var text = document.getElementById("display")

text.innerHTML= displayHour+":"+displayMin+":"+displaySec;
// console.log (text)

} 
 var status="stoped"
 var timer 
 function startStop(){
 	if( status=="stoped"){
 	timer=setInterval(stopWatch,1000);
    status="stared" 
    document.getElementById("startStop").innerHTML="stop"
 	}
 	else{
 		clearInterval(timer)
 		status="stoped"
 		document.getElementById("startStop").innerHTML="start"
 	}
 
 }
 function reset(){
 	 status="stoped"
 	 document.getElementById("startStop").innerHTML="start"
 	 document.getElementById("display").innerHTML= "00:00:00"
 	 min=0,sec=0,hour=0;
 	 clearInterval(timer)
 }