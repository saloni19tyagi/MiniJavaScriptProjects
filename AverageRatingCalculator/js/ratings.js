function collect_rating() {
    rating = {
        count : 0 ,
        sum : 0 ,
        average : 0 
    }
    let rating = 0 ;
}

const elements = document.querySelectorAll(".rating") ;
console.log(elements); 
elements.forEach(element => {
    rating = parseInt(element.id.replace("star", "")) ;
    count += parseInt(element.value) ;
    sum += parseInt(element.value*rating) ;
});