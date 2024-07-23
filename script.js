const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const registerBtn = document.querySelector('#btn-register');
const loginBtn = document.querySelector('#btn-login');
const btnPopup = document.querySelector(".btnLgin-popup");
const iconClose = document.querySelector(".icon-close");
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add("active-popup");
})

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
    
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
   
})
iconClose.addEventListener("click",()=>{
    wrapper.classList.remove('active-popup'); 
});

registerBtn.addEventListener('click',()=>{
    const uname = document.getElementById("rg-un").value;
    const umail = document.getElementById("rg-mail").value;
    const upwd = document.getElementById("rg-pwd").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    if(uname === "" && umail === "" && upwd ===""){
        alert("please fill in all fields");
        return;
    }
    for(let user in users){
        if(users[user].user.umail == umail){
        alert("user email already exists. please login!");
        showLoginForm();
        return;
     }
    }
    
    const user = {
        uname:uname,
        umail:umail,
        upwd:upwd
    }
    users.push({user})
    localStorage.setItem("users",JSON.stringify(users));
    alert("User Registered Succesfully");
    showLoginForm();
})

loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const lid = document.getElementById("lmail").value;
    const lpwd = document.getElementById("lpwd").value;
    let users = JSON.parse(localStorage.getItem("users"));
    let validUser = false;
    for(let user in users){
        if(users[user].user.umail == lid){
            validUser = true;
            window.location.href = "./home.html";
        }
     }

     if(!validUser){
        alert("Not a valid user,please register with your email")
        wrapper.classList.add('active');
     }
    

    
})

function showLoginForm(){
    wrapper.classList.remove('active');
}

