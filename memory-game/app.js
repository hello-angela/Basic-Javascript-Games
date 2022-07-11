document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'burger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'burger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]

// randomizes items in array
cardArray.sort(() => 0.5 - Math.random())

// grab grid
const gridDisplay = document.querySelector('#grid')

// change score
const scoreDisplay = document.querySelector('#score')

// for cards picked
let cardsChosen = []
let cardsChosenIds = []

// for correct cards
let cardsWon = []

// create grid
function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if(optionOneId == optionTwoId) {
        // if you choose the same card
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    } else if (cardsChosen[0] == cardsChosen[1]){
        // if you choose the correct pair
        alert("Matched!")
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionOneId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        // if you choose the wrong pair
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert("Sorry, try again!")
    }

    cardsChosen = []
    cardsChosenIds = []
    scoreDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
        scoreDisplay.textContent = 'Congratulations! You found them all!'
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}

createBoard()
})