let count = 0 ;
const lowerCount = document.getElementById("lowerCount") ;
const addCount = document.getElementById('addCount') ;
const clickCount = document.getElementById('clickCount') ;

lowerCount.addEventListener('click', decrement) ;
addCount.addEventListener('click', increment) ;

function increment() {
    count++ ;
    console.log(count) ;
    clickCount.innerText = count ;
    if(count > 0)
        clickCount.style.color = 'green' ;
    
}
function decrement() {
    count-- ;
    console.log(count) ;
    clickCount.innerText = count ;
    if(count < 0)
        clickCount.style.color = 'red' ;
}