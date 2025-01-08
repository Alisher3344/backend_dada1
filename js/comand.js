let card_box =document.querySelector('.DIV_for_bacen');

function getdata (params,calbak) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
  
       if (xhr.readyState === 4 && xhr.status === 200) {
            let res = xhr.responseText;
          let resJSON =JSON.parse(res);
    calbak?.(resJSON);
    loading.innerHTML="";
    error_div.setAttribute("style", "display: none;");
        } 
    };
    
    xhr.open("GET", params);
    
    xhr.send(); 
    
       
}
getdata("https://jsonplaceholder.typicode.com/comments" ,(posts)=>{posts.map((post)=>{
    let data = card_func(post);
    card_box.innerHTML+=data;
});});
function card_func(post) {
    if (post.postId==1) {
        return  `  <div class="card_elem_el">
            <h1>
                <b>NAME: </b>
               ${post.name}
            </h1>
           <p>
            <b>TITLE: </b>
           ${post.email}
           </p>
           <p>
            <b>BODY: </b>
           ${post.body}
           </p>

        </div> `  
    }
    else{
        return ''
    } 
    }
