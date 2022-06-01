let callback=(position)=>{
    console.log(position);
}
let errorCode=(error)=>{
    console.log(error);
}
navigator.geolocation.getCurrentPosition(callback,errorCode)