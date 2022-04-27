/*Storage Key*/

const STORAGE_KEY = "key"

let username = document.querySelector(".username");
let password = document.querySelector(".password");


/* creating a class */
class User{

    constructor(id,username,password){
        this.id = id;
        this.username = username;
        this.password = password;
    }

    //Getting the username of user input
    get getUsername(){
        return this.username
    }

    //Setting the username of user input
    set setUsername(newName){
        this.username = newName;
    }
}

/* --------------------------
    Variables Setup
-------------------------- */

let signIn = document.querySelector(".submit")


/* ---------------------------
    Event listens for sign in
------------------------------*/
signIn.addEventListener("click", (e) =>{

    let username = document.querySelector('.username').value;
    let password = document.querySelector('.password').value;

    let user = new User("!A12354#", username, password)

    user = JSON.stringify(user);

    localStorage.setItem(STORAGE_KEY, user)
})



