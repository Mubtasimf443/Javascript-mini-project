
//Selecting TextArea
let text = document.querySelector('textarea');
let btn = document.querySelector('button');
let h2 = document.querySelector('h2');
//defining Varible for use

var startTime, endTime; //using var for global use
text.setAttribute('typing','false')
text.disabled=true;



btn.addEventListener('click', (e) => {
 e.preventDefault();
 let typing =text.getAttribute('typing');
  if (typing==='false') {
     text.setAttribute('typing','true');
    text.removeAttribute('disabled')
    btn.innerText='Check Speed';
    startTime = Date.now();
    h2.style.color = '#fff';
    h2.innerText = 'Type to check your Writting Speed';
    text.value = '';
  } 
  if (typing==='true') {
    text.setAttribute('typing','false');
    text.disabled= true;
    btn.innerText='Start Typing';
    endTime = Date.now();
    let totalTime = ((endTime - startTime)/1000);
    let value = text.value;
    let splitedValue = value.split(" ");
     splitedValue = removeLastIndex(splitedValue);
    console.log(splitedValue)
    h2.innerText = `You have Writen ${splitedValue.length} Words and ${ text.value.length } charecters in ${totalTime} Seconds `;
    h2.style.color= 'red';
  }
  
});








