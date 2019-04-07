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


function init(e) {
 const body = document.querySelector("body")

 body.addEventListener('keydown',function(e) {
   const X = []  
   const key = e.keydown;
   let i=0;
   while (i<codes.length);
   if(key === codes[i]) {
     i++;
     
    
       
       i = 0
     }
     
   } else {
     i = 0;
   }
 })
}

init()

 
