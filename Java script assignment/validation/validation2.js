const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')

//add event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

// more email validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexof("@");
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true
}

// define the validate function
const validate = () => {
const usernameVal = document.Value.trim();
const emailVal = document.Value.trim();
const phoneVal = document.Value.trim();
const passwordVal = document.Value.trim();
const cpasswordVal = document.Value.trim();

// Validate username
if(usernameVal === "") {
    setErrorMsg(username, 'username cannot be blank');
} else if (usernameVal.length <= 2){
    setErrorMsg(username, 'username min 3 char');
} else {
    setSuccessMsg(username)
}

// Validate username
if(username === "") {
    setErrorMsg(username, 'username cannot be blank');
} else if (username.length <= 2){
    setErrorMsg(username, 'username min 3 char');
} else {
    setSuccessMsg(username)
}
// Validate username
if(username === "") {
    setErrorMsg(username, 'username cannot be blank');
} else if (username.length <= 2){
    setErrorMsg(username, 'username min 3 char');
} else {
    setSuccessMsg(username)
}


}