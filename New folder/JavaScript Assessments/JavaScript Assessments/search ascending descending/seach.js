const url='https://jsonplaceholder.typicode.com/posts'
function ascending(){
      fetch(url).then(response=>{
            console.log(response);
            return response.json()
      }).then(data=>{
            console.log(data);
            let postData='<ul style="list-style: none;">'
            data.map(post=>{
                  postData+=`<li>${post.id}. ${post.title}</li>`
            })
            postData+='</ul>'
            const div=document.getElementById('text')
            div.innerHTML=postData
            console.log('postsData',postData);

      }).catch(err=>{
            console.log(err);
            console.error(err.message);
      })
}
function descending(){
      fetch(url).then(response=>{
            console.log(response);
            return response.json()
      }).then(data=>{
            revData=data.reverse()
            console.log(revData);
            let postData='<ul style="list-style: none;">'
            revData.map(post=>{
                  postData+=`<li>${post.id}. ${post.title}</li>`
            })
            postData+='</ul>'
            const div=document.getElementById('text')
            div.innerHTML=postData
            console.log('postsData',postData);

      }).catch(err=>{
            console.log(err);
            console.error(err.message);
      })
}