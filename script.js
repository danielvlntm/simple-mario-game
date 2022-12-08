const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');

const gameBoard = document.querySelector('.game-board');

const gameOver = document.querySelector('.game-over');
const menu = document.querySelector('.menu');
const goMenu = document.querySelector('.gomenu');
const startButton = document.querySelector('.startGame');
const restartButton = document.querySelector('.restart');


const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const inicio = () => {
    gameOver.style.visibility = 'hidden';
    gameBoard.style.visibility = 'hidden';
    menu.style.visibility = 'visible';
    pipe.style.animation = '';
        //'pipe-animations 1.5s infinite linear';
    pipe.style.left = ``;

    mario.src = 'assets/imgs/mario.gif';
    mario.style.width = '120px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '';
    mario.style.animation = '';

    cloud.style.left = ``;

}

const start = () => {
    gameBoard.style.visibility = 'visible';
    menu.style.visibility = 'hidden';
//    restartButton.style.visibility = 'hidden';
    gameOver.style.visibility = 'hidden';
    pipe.style.display = 'none';
    setTimeout(() => {
        pipe.style.display = 'block';
    }, 2200);

const loop = setInterval(() => {
   
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'assets/imgs/game-over.png';
        mario.style.width = '60px';
        mario.style.marginLeft = '40px';

        cloud.style.animation = '';
        cloud.style.left = `${cloudPosition}px`;

        gameOver.style.visibility = 'visible';
        
        clearInterval(loop);
    }
}, 10);


}


const restart = () => {
    pipe.style.display = 'none';
    setTimeout(() => {
        pipe.style.display = 'block';
    }, 2200);

    gameOver.style.visibility = 'hidden';

    pipe.style.animation = '';
        //'pipe-animations 1.5s infinite linear';
    pipe.style.left = ``;

    mario.src = 'assets/imgs/mario.gif';
    mario.style.width = '120px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '';
    mario.style.animation = '';

    cloud.style.left = ``;

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');
    
        if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = 'assets/imgs/game-over.png';
            mario.style.width = '60px';
            mario.style.marginLeft = '40px';
    
            cloud.style.animation = 'cloud 20s infinite linear';
            cloud.style.left = `${cloudPosition}px`;
    
            gameOver.style.visibility = 'visible';
//            restartButton.style.visibility ='visible';
//            goMenu.style.visibility = 'visible';
            clearInterval(loop);
        }
    }, 10);
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

restartButton.addEventListener('click', restart);
startButton.addEventListener('click', start);
goMenu.addEventListener('click', inicio);


