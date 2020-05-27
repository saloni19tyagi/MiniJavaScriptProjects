let imageArray = ['./img/dog1.jpg', './img/dog2.jpg', './img/dog3.jpg'] ;
let index = 0 ;
const button = document.getElementById('btn') ;
const button1 = document.getElementById('btn1'); 

button.addEventListener('click', slideImage) ;
button1.addEventListener('click', slideImageBackward) ;


function slideImage() {
    index++ ;

    if(index > imageArray.length)
        index = 0 ;
    console.log(imageArray[index]) ;
    document.getElementById('img').src = imageArray[index] ;
}

function slideImageBackward() {
    index-- ;

    if(index < 0)
        index = imageArray.length - 1 ;
    console.log(imageArray[index]) ;
    document.getElementById('img').src = imageArray[index] ;
}