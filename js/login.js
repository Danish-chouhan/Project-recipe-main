let validation1 = document.querySelector(".email")
let validation2 = document.querySelector(".password")
let flag = 1
function vld(){
    if(validation1.value == ""){
        document.querySelector("#v1").innerHTML = "Please enter your email"
       flag = 0
    }else{
        document.querySelector("#v1").innerHTML = ""
        flag = 1
    }

    if(validation1.value == ""){
           document.querySelector("#v2").innerHTML = "Please enter your password"
           flag = 0
    }else{
        document.querySelector("#v2").innerHTML = ""
        flag = 1
    }
    
    if(flag){
        return true
    }else{ 
        return false
    }
}