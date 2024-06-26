// document.getElementById('btn').addEventListener('click', function(){
//     console.log('hafsa');
// })

function handleClick (event){
    console.log(event.target.parentNode.parentNode.childNodes[1].innerText);
}

