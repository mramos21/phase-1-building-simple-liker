// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Hides the message. Had to place it here to pass the test.
const modal = document.querySelector('#modal');
modal.className = 'hidden'


document.addEventListener('DOMContentLoaded',() => {
  const hearts = document.querySelectorAll('.like-glyph');
  
  hearts.forEach(hearts => hearts.addEventListener('click', function() {
    mimicServerCall()
    .then(() => {
      
      if(hearts.textContent === EMPTY_HEART) {
        hearts.textContent = FULL_HEART;
        hearts.className = 'activated-heart';
      }
      
      else if (hearts.textContent === FULL_HEART) {
        hearts.textContent = EMPTY_HEART
        hearts.className = 'like-glyph'
      }
    })
    .catch(() => {
      modal.className = '';
      function hideError() {
        modal.className = 'hidden'
      }
      setTimeout(hideError, 3000)
    })
  }));
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}