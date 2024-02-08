











let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submit = document.querySelector("#submit");



let getusername = localStorage.getItem("username");
let getpassword = localStorage.getItem("password");


submit.addEventListener('click',(e)=>
{
    e.preventDefault();
    if(username.value ==="" || password.value ==="") {
        alert("please fill all inputs");
    }
    else if ((getusername && getusername.trim() === username.value) && (getpassword && getpassword.trim()=== password.value)) {
        window.location = "index.html"
    }
    else
    {
        alert("username or password is incorrect");
    }
})
