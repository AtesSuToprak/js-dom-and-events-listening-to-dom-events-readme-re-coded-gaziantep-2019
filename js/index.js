// using this file is optional
// you can also load the code snippets in using your browser's console

const main = document.getElementById('main');
 
main.addEventListener('click', function(event) {
  alert('I was clicked!');
});

const input = document.querySelector('input');

input.addEventListener('keydown', function(e){
  console.log(e.which);
});

const inputSecond = document.querySelector('inputSecond');

inputSecond.addEventListener('keydown', function(e){
  
  if(e.which === 71){
    console.log('Default Prevented!');
    return e.preventDefault;
  } else {
    console.log('Not a "g"');
  }
});
  
  let divs = document.querySelectorAll('div');
 
function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
 
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}

divs = document.querySelectorAll('div');
 
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}
 
for (let i = 0; i < divs.length; i++) {
  
  divs[i].addEventListener('click', capture, true);
}
