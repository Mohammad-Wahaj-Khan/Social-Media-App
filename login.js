function login(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    console.log(email)
    console.log(password)

    var getUSER = JSON.parse(localStorage.getItem("users"))

    var userIndex = getUSER.findIndex(function(value){
        if(value.email === email && value.password === password) return true
    })

    if(userIndex !== -1){
        alert("SUCCESSFULLY LOGIN") 
        window.location.replace("./lobby.html")
    }
    else{
        alert("Email or Password Doesn't Match ")
    }

    console.log(userIndex)
}