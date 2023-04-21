const username =document.getElementById("user_name")
const password =document.getElementById("password")
// console.log(username)
// console.log(password)
addEventListener("submit",(e)=>{
    e.preventDefault()
    if (username.value=="arjunav" && password.value=="12345") {
        window.location.href="home.html"
    } else {
        alert("Username or password is incorrect !!!")
    }
})