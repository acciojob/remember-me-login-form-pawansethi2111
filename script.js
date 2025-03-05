// //your JS code here. If required.
// let submit  = document.querySelector("#submit");
// let username = document.querySelector("#username");
// let password = document.querySelector("#password");
// let checkbox = document.querySelector("#checkbox");
// let existing  = document.querySelector("#existing");

// existing.style.display = "none";


// submit.addEventListener("click",function(e){
// 	e.preventDefault();
// 	localStorage.setItem("username",username);
// 	localStorage.setItem("password",password);
// 	alert("Logged in as" ${username});
// 	submit.style.display = "none";
// 	existing.style.display = "block";
	

// if(localStorage.getItem("username")==null){
	
// }
// })



//your JS code here. If required.
let submit  = document.querySelector("#submit");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let existing  = document.querySelector("#existing");

existing.style.display = "none";


submit.addEventListener("click",function(e){
	e.preventDefault();
	localStorage.setItem("username",username);
	localStorage.setItem("password",password);
	alert("Logged in as" ${username});
	submit.style.display = "none";
	existing.style.display = "block";
	

if(localStorage.getItem("username")==null){
	
}
})

