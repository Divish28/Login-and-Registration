function show(){
    var pass=document.getElementById('password')
    if (pass.type === 'text'){
        pass.type='password'
    }
    else{
        pass.type='text'
    }
}
function storage(){
    var user=document.getElementById('email')
    var password=document.getElementById('password')
    sessionStorage.setItem('email',user.value)
    sessionStorage.setItem('pass',password.value)
}
function validate(){
    let x = sessionStorage.getItem('email')
    let y = localStorage.getItem('email')
    if (x == y) {
        window.location.replace("/HTML/dashbord.htlm")
        alert("Login sucessful")
    } else {
        alert("invalid login")
        window.location.replace("/HTML/login.html")
    }
}