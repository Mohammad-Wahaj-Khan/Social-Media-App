function signup() {
    var fullName = document.getElementById("fullName").value
    var phoneNumber = document.getElementById("phoneNumber").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    var object = {
        fullName,
        phoneNumber,
        email,
        password,
    }

    var getUsers = JSON.parse(localStorage.getItem("users"))
    if (getUsers === null) {

        var arr = []
        arr.push(object)
        console.log("first user signup")
        localStorage.setItem("users", JSON.stringify(arr))
        alert("User Signup Successfully")
        window.location.href = "./index.html"
    } else {
        console.log(getUsers)
        var findUser = getUsers.find(function (value) {
            console.log(value.email, "value")
            if (value.email === email) {
                return true
            }
        })

        if (findUser === undefined) {
            getUsers.push(object)
            localStorage.setItem("users", JSON.stringify(getUsers))
            alert("user signup")
            window.location.href = "./index.html"
        } else {
            alert("EMAIL ADDRESS ALREADY EXISTS")
        }
    }
}