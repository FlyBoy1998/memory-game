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
        cardElement.className = 'item';
        const image = document.createElement('img');
        image.src = `./icons/${card}.png`;
        cardElement.appendChild(image);
        app.appendChild(cardElement);

        cardElement.onclick = function() {
            this.classList.add('cardOpen');
            setTimeout(() => {
                let cardOpen = app.querySelectorAll('.cardOpen');
                let cardMatch = app.querySelectorAll('.cardMatch');
                if(cardOpen.length > 1) {
                    if(cardOpen[0].innerHTML === cardOpen[1].innerHTML) {
                        cardOpen[0].classList.add('cardMatch');
                        cardOpen[1].classList.add('cardMatch');

                        cardOpen[1].classList.remove('cardOpen');
                        cardOpen[0].classList.remove('cardOpen');

                    if(cardMatch.length == duplicateCards.length) {
                        alert('Nice job!');
                    }
                } else {
                    cardOpen[0].classList.remove('cardOpen');
                    cardOpen[1].classList.remove('cardOpen');
                }
            }
            }, 1000);
            
        }
    })
}

displayCards();
