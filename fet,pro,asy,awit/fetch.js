console.log('this is fetch');
let myBtn=document.getElementById("myBtn")

let content=document.getElementById("content")

// function getData(){
//     url = "txtforfetch.txt"
//     fetch(url).then((response)=>{
//         console.log("inside first then");
//         return response.text()
//     }).then((data)=>{
//         console.log("inside second then");
//         console.log(data);
//     })
//}
// getData()

//lets take json data
// if we do response.text it will show in the form of plain text
// we use response.json then we will getdata in the form 0f object and parse
// if we are returning valid json data then we will do response.json   then we dont need to use json.stringfy or parse
//if data is in the form of object then we need to use json.stringfy and if it is string we cant use
function getData(){
    url="https://jsonplaceholder.typicode.com/posts"
    fetch(url).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
    })
}
getData()

function postData(){
    const post={
        userName:'harish',
        id:202,
        type:'javascript end game'
    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify(post),
        headers:{
            'Content-type':'appliation/json'
        }
    }).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log('Added post',data);
    })
}
postData()