let email = document.querySelector(".email");
let password = document.querySelector(".password");
let checkbox= document.querySelector(".checkbox")

//Storing users email and password
function store()
{
    localStorage.setItem('email',email.value)
    localStorage.setItem('password', password.value)
}

function checkLogin()
{
    //get set stored data
    let emailStored = localStorage.getItem('email')
    let passwordStored = localStorage.getItem('password')

    //data entered from login-form
    let emailInput = document.querySelector('.email').value
    let passwordInput = document.querySelector('.password').value

    if(emailInput != emailStored)
    {
       let eError = document.querySelector(".email-error-message")
       eError.innerHTML = "Please enter valid email address"
    }

    if(passwordInput != passwordStored)
    {
        let pError = document.querySelector(".password-error-message")
        pError.innerHTML = "Please enter password associated with email address"
    }

}


checkbox.addEventListener('click', event =>{
    
})
