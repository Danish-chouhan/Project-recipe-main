const nameSignUp = document.querySelector('.name')
const emailSignUp = document.querySelector('.email')
const passwordSignUp = document.querySelector('.password')
const btn = document.querySelector('.btnLogin')


let name  = nameSignUp.value;
let email = emailSignUp.value;
let password = passwordSignUp.value;

btn.addEventListener('click',()=> {
    validateUser()

    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
})
