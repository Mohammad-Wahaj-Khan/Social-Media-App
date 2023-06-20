var loginUser;
var listParent = document.getElementById("listParent")


window.addEventListener("load", function () {

    if(listParent){
        var getPost = JSON.parse(localStorage.getItem("posts"))
        for(var value of getPost){
            listParent.innerHTML += `<div class="card mx-auto my-3" style="width: 48rem;">
            <div class="card-body">
          <h5 class="card-title">${value.title}</h5>
          <p class="card-text">${value.description}</p>
            <button class="btn btn-secondary ">Edit Post</button>
            <button class="btn btn-info">Delete Post</button>
        </div>
      </div>`
        }
    }

    
})
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

function addPost(){

    var title = document.getElementById("title")
    var description = document.getElementById("description")

    if(!title.value || !description.value){
        alert("Please Enter Values")
        return
    }


    var socialApp = `<div class="card mx-auto my-3" style="width: 48rem;">
        <div class="card-body">
      <h5 class="card-title">${title.value}</h5>
      <p class="card-text">${description.value}</p>
        <button class="btn btn-secondary ">Edit Post</button>
        <button class="btn btn-info">Delete Post</button>
    </div>
  </div>`

  console.log(socialApp)
    listParent.innerHTML += socialApp

    var postObject = {
        title : title.value,
        description : description.value
    }
    var getPost = JSON.parse(localStorage.getItem("posts"))
    if(getPost == null){
        var array = []
        array.push(postObject)
        localStorage.setItem("posts", JSON.stringify(array))
    }
    else{
        getPost.unshift(postObject)
        localStorage.setItem("posts", JSON.stringify(getPost))
    }

    title.value = ""
    description.value = ""
}



//   long Way
   /* // var cardDiv = document.createElement("div")
    // cardDiv.classList.add("card")


    // var cardBodyDiv = document.createElement("div")
    // cardBodyDiv.classList.add("card-body")

    // var cardTitle = document.createElement("h5")
    // cardTitle.classList.add("card-title")
    // cardTitle.innerHTML = title.value
    // cardBodyDiv.append(cardTitle)

    // var cardText = document.createElement("p")
    // cardText.classList.add("card-text")
    // cardText.innerHTML = description.value
    // cardBodyDiv.append(cardText)


    // // var editBtn = document.createElement("button")
    // // editBtn.innerHTML = "EDIT"
    // // cardBodyDiv.append(editBtn)
    // // editBtn.classList.add("btn", "btn-secondary")

    // // console.log(cardBodyDiv)
    // // console.log(cardDiv )
    // // console.log(cardText )
    // // console.log(cardTitle)

    // cardDiv.append(cardBodyDiv)

    // listParent.append(cardDiv)
    
    // console.log(cardBodyDiv) */


    /* // ES6 topic

    // long way 

    // var a = "Wahaj"
    // var b = "Khan"
    // var c = "My name is" + " " + a + " " + b
    // console.log(c)

    // short Way

    // var a = "Wahaj"
    // var b = "khan"
    // var c = `My name is ${a} ${b}`
    // console.log(c) */