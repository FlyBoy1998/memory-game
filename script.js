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

function displayCards() {
    let duplicateCards = cards.concat(cards);
    let shuffledCards = shuffleArray(duplicateCards);

    shuffledCards.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('item');
        const image = document.createElement('img');
        image.src = `./icons/${card}.png`;
        cardElement.appendChild(image);
        app.appendChild(cardElement);
    })
}

displayCards();
