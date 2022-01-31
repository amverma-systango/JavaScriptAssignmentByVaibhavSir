
let actualvalue = document.getElementById("actualvalue");
let percentage = document.getElementById("percentage");


let result = document.getElementById("result");


function calculate(){
	result.innerText = parseFloat(actualvalue.value)*parseFloat(percentage.value)/100; 

	console.log(actualvalue+" "+percentage);
}
