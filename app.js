var loginbtn = document.getElementById('loginbtn')
var accountbtn = document.getElementById("accountbtn")

function donebtn(){
    var username = document.getElementById('username')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    if(username.value == '' && email.value == '' && password.value == ''){
        Swal.fire({
        title: "Please fill this fields",
        icon: "info"
      });
    }
    else{
    localStorage.setItem("name",username.value) 
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    Swal.fire({ 
        title: "Account Created",
        icon: "success"
      });
      username.value = ''
      email.value = ''
      password.value = ''
      setTimeout(() => {
        window.location.href = 'index.html'
      }, 1000);
    }
}
loginbtn.addEventListener('click',()=>{
    var getemail = localStorage.getItem('email')
    var getpass = localStorage.getItem('password')

    var mail = document.getElementById('mail')
    var pass = document.getElementById('pass')

    if(mail.value == getemail && pass.value == getpass){
        window.open('daseboard.html')
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops..",
            text: "Email or Password Not Found!",
          });
        mail.value = ''
        pass.value = ''
    }
})
accountbtn.addEventListener('click',()=>{
    window.location.href = 'create.html'
})
