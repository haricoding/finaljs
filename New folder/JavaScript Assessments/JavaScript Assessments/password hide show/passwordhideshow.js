let state=false
function showPass(){
      if(state){
            document.getElementById('password').setAttribute("type","password");
            state= false;
      }
      else{
            document.getElementById('password').setAttribute("type","text");
            state= true;   
      }
}
