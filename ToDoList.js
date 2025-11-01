let btn=document.getElementById('btn');
let inbtn=document.getElementById('inbtn');
let listbox=document.getElementById('list-container');
function addTask(){
    if(inbtn.value==''){
        alert("you must write someting");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inbtn.value;
         listbox.appendChild(li);
          let span =document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    }
    inbtn.value='';
   
    saveData();
}
function saveData(){ 
    localStorage.setItem("data",listbox.innerHTML);
}
function show(){
   listbox.innerHTML= localStorage.getItem("data");
}
listbox.addEventListener('click', function(e) {
    // your code
    if(e.target.tagName=="LI"){
  e.target.classList.toggle("checked");
  saveData();
}
else if(e.target.tagName=="SPAN"){
  e.target.parentElement.remove();
  saveData();
}

});
show();

