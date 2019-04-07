var allowedKeys = {
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  65: 'a',
  66: 'b'
};

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


var codePosition = 0
function init(e) {
  document.addEventListener('keydown',function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = codes[codePosition];
    if(key === requiredKey) {
      codePosition++;
      if(codePosition === codes.length) {
        alert("YAY");
        codePosition = 0;
      }
    } else {
      codePosition = 0;
    }
  })
}

init(); 
