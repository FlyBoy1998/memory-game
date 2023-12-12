const cards = ["html", "css", "js", "react", "tailwind", "typescript", "bootstrap", "node-js"];

const app = document.querySelector('.app');
const resetBtn = document.querySelector('.reset');

// Shuffle Array
function shuffleArray(array) {
    let currentIndex = array.length;
    let randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

