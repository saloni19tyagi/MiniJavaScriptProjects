const button = document.querySelector('button') ;
const body = document.querySelector('body') ;

button.addEventListener('click', changeBgColor) ;

function changeBgColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16) ;
    body.style.backgroundColor="#"+randomColor ;
}

