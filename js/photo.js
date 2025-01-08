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
getdata("https://jsonplaceholder.typicode.com/photos" ,(posts)=>{posts.map((post)=>{
    let data = card_func(post);
    card_box.innerHTML+=data;
});});
function card_func(post) {
    if (post.albumId==1) {
        return  ` <div class="card_in_box">
            <img style="width: 300px; height: 100px;" src="${post.url}" alt="not found 404">
            <h1>
                <b>TITLE :</b>
                ${post.title}
            </h1>
        </div> `  
    }
    else{
        return ''
    } 
    }
