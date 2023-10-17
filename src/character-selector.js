let characterSelected = 'male-bot'
export function initCharacterSelector() {
    const options = document.querySelectorAll('.option')
    console.log(options)

    options.forEach((option) => {
        option.addEventListener('click', () => {
            options.forEach((option) => option.classList.remove('selected'));
            option.classList.add('selected')
            characterSelected = option.dataset.character;
            console.log(characterSelected)
        })
    })
}
export function getCharacter() {
    return characterSelected;
}