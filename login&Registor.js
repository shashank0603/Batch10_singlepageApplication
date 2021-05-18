
var loginpage = document.getElementById("login");
var x = document.getElementById("btn");
var registerpage = document.getElementById("register")

function login() {
    loginpage.style.left = "60px";
    registerpage.style.left = "450px";
    x.style.left = "0px";
}

function register(){
    
    loginpage.style.left = "-400px";
    registerpage.style.left = "60px";
    x.style.left = "110px";
}
