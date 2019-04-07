var allowedKeys = {
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  65: 'a',
  66: 'b'
};

const konamiCode = [
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
var konamiCodePosition = 0;
// add keydown event listener
document.body.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];
  // compare the key with the required key
  if (key == requiredKey) {
    // move to the next key in the konami code sequence
    konamiCodePosition++;
    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length)
      alert("Booya");
  } else
    konamiCodePosition = 0;
});
  
}

init(); 
