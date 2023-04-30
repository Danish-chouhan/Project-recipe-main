const nameSignUp = document.querySelector('.name')
const emailSignUp = document.querySelector('.email')
const passwordSignUp = document.querySelector('.password')
const btn = document.querySelector('.btnLogin')


btn.addEventListener('click',()=> {
  if(nameSignUp.value != "" && emailSignUp.value != "" && passwordSignUp.value != ""){
      validateUser()
      function validateUser() {
          window.location.href = "../html/selecting-page.html"
      }
}else{    
    alert("Please fill all details to Singup")
  }
})
