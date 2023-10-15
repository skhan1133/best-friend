const copyButtons = document.querySelectorAll('.copy-button'); // Select all copy buttons

copyButtons.forEach(function (copyButton, index) {
    copyButton.addEventListener('click', function () {
        const poemText = document.querySelectorAll('.poem-text')[index]; // Select the corresponding poem text
        const range = document.createRange();
        range.selectNode(poemText);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        
        document.execCommand('copy');

        selection.removeAllRanges();
        
        copyButton.style.backgroundColor = '#000';
        copyButton.innerText = 'Copied';

        setTimeout(function () {
            copyButton.style.backgroundColor = '#bd2f46';
            copyButton.innerText = 'Copy Text';
        }, 2000);
    });
});




// for falling of love

// Array of love emojis (without the broken heart)
const loveEmojis = ['❤️', '💖', '😙', '😙', '😘', '💏', '💑', '💞', '💗', '💓', '💕', '😻', '💘', '💋', '💚', '💜', '🤎', '💛', '🤍', '🧚🏻‍♀️', '🎂', '💫', '🐣', '🐥', '🍰', '😁'];


// Function to create and animate falling emojis
function createFallingEmoji() {
  const loveEmoji = document.createElement('div');
  loveEmoji.className = 'love-emoji';
  loveEmoji.style.left = Math.random() * window.innerWidth + 'px';
  loveEmoji.textContent = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
  document.querySelector('.love-emojis').appendChild(loveEmoji);
  setTimeout(() => {
    loveEmoji.remove();
  }, 5000);
}

// Function to continuously create falling emojis
function startFallingEmojis() {
  setInterval(createFallingEmoji, 1000); // Adjust the interval as needed
}

// Start the falling emojis when the page loads
window.addEventListener('load', startFallingEmojis);
