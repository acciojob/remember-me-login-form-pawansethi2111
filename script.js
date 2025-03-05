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


 
const form = document.getElementById('login-form');
const existingButton = document.getElementById('existing');
const savedUsername = localStorage.getItem('username');
const savedPassword = localStorage.getItem('password');
 
if (savedUsername && savedPassword) {
    existingButton.style.display = 'none';
}
 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('checkbox').checked;
 
    if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }
 
    alert(`Logged in as ${username}`);
 
    if (rememberMe) {
        existingButton.style.display = 'block';
    }
});
 
existingButton.addEventListener('click', function () {
    const savedUsername = localStorage.getItem('username');
    alert(`Logged in as ${savedUsername}`);
});



