const button1 = document.getElementById('about');

button1.addEventListener('click', aboutbtn);

function aboutbtn(){
    window.location.href = "./about_btn.html";
};

const button2 = document.getElementById('donate');

button2.addEventListener('click', donatebtn);

function donatebtn(){
    window.location.href = "./contact_btn.html";
};

const button3 = document.getElementById('addbtn');
const input_t = document.getElementById('first_name');
const uno = document.querySelector('.collection');
document.addEventListener("DOMContentLoaded", gettasks);


function gettasks(){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach((task) => {
        const li = document.createElement('li');

        li.className = "collection-item";
    
        li.appendChild(document.createTextNode(task));
    
        const link = document.createElement('a');
    
        link.className = "delete-item secondary-content"
    
        link.innerHTML = `<i class="material-icons">clear</i>`;
    
        li.appendChild(link);
    
        uno.appendChild(li); 
    })
}

button3.addEventListener('click', addbtn_t);

function addbtn_t(e){
    if(input_t.value === ""){
        M.toast({html: 'Type something !'})  // This is a toast function inbuilt by materialize.
    
    

    }else{

    const li = document.createElement('li');

    li.className = "collection-item";

    li.appendChild(document.createTextNode(input_t.value));

    const link = document.createElement('a');

    link.className = "delete-item secondary-content"

    link.innerHTML = `<i class="material-icons">clear</i>`;

    li.appendChild(link);

    uno.appendChild(li);

    storelocal(input_t.value)

    input_t.value = "";



    function storelocal(task){
        let tasks;
        if(localStorage.getItem("tasks") === null){
            tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem("tasks"));
        }

        tasks.push(task);

        localStorage.setItem("tasks", JSON.stringify(tasks));
     }
    }

    e.preventDefault()
}

uno.addEventListener('click',remove);
function remove(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();

        removeloc(e.target.parentElement.parentElement);
    }
}

function removeloc(item){
    let tasks;
    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task, index){
       if(item.textContent === task){
           tasks.splice(index, 1)
       }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks))
}
