let card_box =document.querySelector('.DIV_for_bacend');

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
getdata("https://jsonplaceholder.typicode.com/posts" ,(posts)=>{posts.map((post)=>{
    let data = card_func(post);
    card_box.innerHTML+=data;
});});
function card_func(post) {
    if (post.userId==1) {
        return  `<div class="card_elem_el">
           <p style="font-size: 25px;">
            <b>TITLE:</b>
             ${post.title}
           </p>
           <p>
            <b>BODY: </b>
             ${post.body}
           </p>
          <a href="./comands.html"><button class="button_go_comands">Commands</button></a>
        </div>`  
    }
    else{
        return ''
    } 
    }