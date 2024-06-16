let tags = document.getElementById("tags");
const input = document.querySelector("#input-tag");

input.addEventListener("keydown", (event)=> {
  event.preventDefault();
  if (event.key===`Enter`) {
    let newLi = document.createElement("li");
    
    
    newLi.innerHTML=input.value + '<button class="deletebtn" >×</button>';
    
    tags.appendChild(newLi);
    input.value=null;
  }
});


document.addEventListener(`click`, (event)=>{
  event.preventDefault();
  if (event.target.className==="deletebtn") {
    event.target.parentNode.remove();
  }
});





















