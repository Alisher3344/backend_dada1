let card_box = document.querySelector('.display_grid');
let loading = document.querySelector(".Loading_Div");
let error_div =document.querySelector('.EROR_DIV');
console.log(card_box);

function getdata (params,calbak) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
        if (xhr.readyState!==2) {
            loading.innerHTML="<h1>xatolik</h1>"  
            error_div.setAttribute("style", "display: flex;");
            setTimeout(() => {
                error_div.innerHTML = `<h1>ERROR</h1>
        <img src="./maisth-dancingsprites.gif" alt="not found 404">`;
                }
            , 3000);
        }
        if (xhr.readyState===3) {
          loading.innerHTML="<h1>loading</h1>"  
        }
        else if (xhr.readyState === 4 && xhr.status === 200) {
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
getdata("https://jsonplaceholder.typicode.com/users" ,(users)=>{users.map((user)=>{
    let data = card_func(user);
    card_box.innerHTML+=data
});});




function card_func(user) {
return `<div class="card_in_box">
       <div style="padding: 10px;">
        <p>
            <b>NAME:</b>
            ${user.name}
        </p>

        <p>
            <b>USER NAME:</b>
             ${user.username}
        </p>

        <p>
            <b>EMAIL:</b>
             ${user.email}
        </p>

        <p>
            <b>ADDRESS:</b>
             ${user.address?.city}
        </p>

        <div class="card_in_div">
            <a href="./pages/todos.html"> <button  onclick="FuncId(${user.userId})" class="card_in_button1 buttonss" style="background-color: rgb(219, 53, 69);">todos</button></a>
            <a href="./pages/posts.html"> <button  onclick="FuncId(${user.userId})" class="card_in_button2 buttonss" style="background-color: rgb(26, 135, 84);">posts</button></a>
            <a href="./pages/photo.html"> <button  onclick="FuncId(${user.userId})" class="card_in_button3 buttonss" style="background-color: rgb(13, 109, 252);">photo</button></a>
        </div>
       </div>
   </div>`
}
function FuncId(id) {
    console.log(id);
    
}