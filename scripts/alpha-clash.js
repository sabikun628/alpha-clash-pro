// function play() {

//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden')



//     const playGround = document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
//     console.log(playGround.classList);

// }

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