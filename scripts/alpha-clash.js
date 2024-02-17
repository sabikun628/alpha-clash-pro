// function play() {

//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden')



//     const playGround = document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
//     console.log(playGround.classList);

// }


function handleKeyboardKeyUpEvent(event) {
    const playerPress = event.key


    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPress, expectedAlphabet);


    if (playerPress === expectedAlphabet) {
        console.log('you get a point');




        const currentScoreElement = document.getElementById('current-score')
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)

        const newScore = currentScore + 1
        currentScoreElement.innerText = newScore;

        console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    } else {
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText)

        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;

        console.log('you missed. lose a lifeline. try again ');

    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log(alphabet);


    const currentAlphabetElement = document.getElementById('current-alphabet');

    currentAlphabetElement.innerText = alphabet;

    setBackgroundColor(alphabet);
}






function play() {
    hideElementById('home');
    showElementById('play-ground');
    continueGame('')
}