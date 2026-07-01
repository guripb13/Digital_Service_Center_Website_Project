const button = document.getElementById('get');
const box = document.getElementById('quick_action');
let val = 1;
button.addEventListener('click', () => {
    if(val == 1){
  box.classList.add('get_extend');
  button.classList.add('get_close');
  button.textContent = "Close";
  val = 0;
}
  else  {  
    box.classList.remove('get_extend');
    button.classList.remove('get_close');
    button.textContent = "View";
    val = 1; 
  }});
  