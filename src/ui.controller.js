import gsap from 'gsap'

export function showWinner(name) {

    document.querySelector('#winners').classList.remove('hide');
    const winner = document.querySelector('#winner')
    winner.innerHTML = `<h1>${name} has reached the end!</h1>`
    const winner_text = document.querySelector('#winner h1')
    const init = { opacity: 0 };
    const end = { opacity: 1, duration: 1, delay: 0.3 };

    const tl_text = gsap.timeline();
    const tl_bg = gsap.timeline();
    tl_bg.fromTo(winner, init, { opacity: 1, duration: 0.3 });
    tl_bg.to(winner, {
        opacity: 0,
        delay: 4,
        duration: 0.5,
    });

    tl_text.fromTo(winner_text, init, end);
    tl_text.to(winner_text, {
        opacity: 0,
        delay: 2,
        duration: 1,
    });

}