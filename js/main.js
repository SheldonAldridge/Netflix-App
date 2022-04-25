let username = document.querySelector(".username");
let password = document.querySelector(".password");
let checkbox= document.querySelector(".checkbox")

//Storing users email and password
function store()
{
    localStorage.setItem('username',username.value)
    localStorage.setItem('password', password.value)
}

function checkLogin()
{
    //get set stored data
    let usernameStored = localStorage.getItem('username')
    let passwordStored = localStorage.getItem('password')

    //data entered from login-form
    let usernameInput = document.querySelector('.username').value
    let passwordInput = document.querySelector('.password').value

    if(usernameInput != usernameStored)
    {
       let eError = document.querySelector(".username-error-message")
       eError.innerHTML = "Please enter your username!"
    }

    if(passwordInput != passwordStored)
    {
        let pError = document.querySelector(".password-error-message")
        pError.innerHTML = "Please enter password!"
    }

}

checkbox.addEventListener('click', event =>{
    
    let setUsername = document.querySelector(".username").value

    if(!setUsername)
    {
        localStorage.removeItem("setUsername")
    }
})
