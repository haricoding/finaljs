const firstname_val = document.getElementById('firstname')
const lastname_val = document.getElementById('lastname')
const email_val = document.getElementById('email')
const country_val = document.getElementById('country')
const state_val = document.getElementById('state')
const zipcode_val = document.getElementById('zipcode')

// Add event
form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})

// define the validate function
const validate = () => {
    const firstname_val = firstname_val.Value.trim();
    const lastname_val = lastname_val.Value.trim();
    const email_val = email_val.Value.trim();
    const country_val = country_val.Value.trim();
    const state_val = state_val.Value.trim();
    const zipcode_val = zipcode_val.Value.trim();
    
    
    // valid username
     if(firstname_val==="") {
         setErrormsg(firstname_val, 'username cannot be blank');
     } else if (firstname_val.length <= 2){
         setErrormsg(firstname_val, 'username min 3 char')
     }else{
         setSuccessMsg(firstname_val )
     }
}
