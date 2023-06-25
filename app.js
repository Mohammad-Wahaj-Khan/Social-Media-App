var listParent = document.getElementById("listParent")
var loginUser;

window.addEventListener("load", function () {

    var userLogin = localStorage.getItem("loginUser")
    if (!userLogin) {
        window.location.replace("./index.html")
        return
    }

    if (listParent) {
        var getPosts = JSON.parse(localStorage.getItem("posts")) || []
        console.log(getPosts, "getPosts")
        for (var value of getPosts) {
            listParent.innerHTML += `<div class="card mx-auto" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${value.title}</h5>
                <p class="card-text">${value.desc}</p>
                <button class="btn btn-secondary" onclick="editPost(${value.id} , this)" >EDIT</button>
                <button class="btn btn-info" onclick="deletePost(${value.id} , this)" >DELETE</button>
            </div>
        </div>`
        }

    }

})

function addPost() {
    console.log("addPost")
    var title = document.getElementById("title")
    var desc = document.getElementById("desc")


    if (!title.value || !desc.value) {
        alert("Please enter values")
        return
    }

    var id;
    var getPosts = JSON.parse(localStorage.getItem("posts")) || []
    console.log(getPosts)

    if (getPosts.length > 0) {
        id = getPosts[0].id + 1
    } else {
        id = 1
    }


    var socialApp = `<div class="card mx-auto" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${title.value}</h5>
        <p class="card-text">${desc.value}</p>
        <button class="btn btn-secondary" onclick="editPost(${id} , this)" >EDIT</button>
        <button class="btn btn-info" onclick="deletePost(${id} , this)" >DELETE</button>
    </div>
</div>`
    listParent.innerHTML = socialApp + listParent.innerHTML

    var postObj = {
        id: id,
        title: title.value,
        desc: desc.value
    }

    getPosts.unshift(postObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))
    title.value = ""
    desc.value = ""
}

function deletePost(id, element) {
    var getPosts = JSON.parse(localStorage.getItem("posts"))
    var indexNum = getPosts.findIndex(function (value) {
        if (value.id === id) return true
    })
    getPosts.splice(indexNum, 1)
    localStorage.setItem("posts", JSON.stringify(getPosts))

    element.parentNode.parentNode.remove()
}

function editPost(id, element) {
    var indexNum;
    var getPosts = JSON.parse(localStorage.getItem("posts"))
    var post = getPosts.find(function (value, index) {
        if (value.id === id) {
            indexNum = index
            return true
        }
    })
    var editTitle = prompt("Edit Title", post.title)
    var editDescription = prompt("Edit Description", post.desc)
    const editObj = {
        id: post.id,
        title: editTitle,
        desc: editDescription
    }
    getPosts.splice(indexNum, 1, editObj)
    localStorage.setItem("posts", JSON.stringify(getPosts))

    var h5Title = element.parentNode.firstElementChild
    var pDescription = element.parentNode.firstElementChild.nextElementSibling
    h5Title.innerHTML = editTitle
    pDescription.innerHTML = editDescription


}


function logout() {
    localStorage.removeItem("loginUser")
    window.location.replace("./index.html")
}