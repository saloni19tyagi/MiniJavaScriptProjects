const button = document.getElementById("btn") ;

button.addEventListener('click', messageDisplay) ;

function messageDisplay() {
    const input = document.getElementById("input-msg").value ;
    document.getElementById('msg').innerHTML = input ;
    document.getElementById('input-msg').value = "" ;
    console.log(input) ;
}