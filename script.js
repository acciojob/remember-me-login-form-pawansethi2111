//your JS code here. If required.
let submit  = document.querySelector("#submit");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let existing  = document.querySelector("#existing");

submit.addEventListener('click',function(e){
	e.preventDefault();
	alert("Logged in as" ${username});
})