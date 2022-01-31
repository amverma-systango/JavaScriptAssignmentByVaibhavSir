
let inp = document.getElementById("inp");
let result = document.getElementById("result");


function check(){
	let year = parseInt(inp.value);
	
	( year % 400 === 0 )?result.innerText = "Yes, its a leap year":
	( year % 100 === 0 )?result.innerText = "No, its not a leap year":
	( year % 4 === 0 )?result.innerText = "Yes, its a leap year":result.innerText = "No, its not a leap year";
}
