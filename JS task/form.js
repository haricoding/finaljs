

function savedata(){
    
let name,email,psw;
name=document.getElementById("name").value
email=document.getElementById("email").value
psw=document.getElementById("psw").value
console.log(name);
console.log(email);

localStorage.setItem("name",name)
localStorage.setItem("email",email)
localStorage.setItem("psw",psw)
}