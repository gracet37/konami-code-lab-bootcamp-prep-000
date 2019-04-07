const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


let i = 0;

function init(e) {
 const body = document.querySelector("body")

 body.addEventListener('keydown',function(e) {
   
   const key = e.keydown;
   if(key === codes[i]) {
     i++;
     
     if(i === codes.length) {
       alert("Woohoo");
       
       i = 0
     }
     
   } else {
     i = 0;
   }
 })
}

init()

 
