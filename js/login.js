
// password shower

const passwordEye = document.getElementById('btn1');
const passwordInput = document.getElementById('password');

passwordEye.addEventListener('click', (event) => {
    event.preventDefault();
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type === 'text';
        passwordInput.type = 'password'
    }
})

// validation

const emailSignUp = document.querySelector('.email')

const passwordSignUp = document.querySelector('.password')

const btn = document.querySelector('.btnLogin')
btn.addEventListener('click',()=> {
  if(emailSignUp.value != "" && passwordSignUp.value != ""){
      validateUser()
      function validateUser() {
          window.location.href = "./html/selecting-page.html"
      }
}else{    
    alert("Please fill all details to Singup")
  }
})

