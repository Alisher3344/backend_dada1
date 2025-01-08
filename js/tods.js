let card_box = document.querySelector(".div_tods_box") 

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
getdata("https://jsonplaceholder.typicode.com/todos" ,(todos)=>{todos.map((todo)=>{
    let data = card_func(todo);
    card_box.innerHTML+=data;
});});

function card_func(todo) {
    let belgi =todo.completed?"✅":"❌";
    if (todo.userId==1) {
      return `<div class="card_elem_el">
      <p style="font-size: 25px;" ><b>TITLE : </b>${todo.title}</p>
      <h1>command ${belgi}</h1> 
  </div>`  
    }
    else{
        return ''
    } 
    }
    