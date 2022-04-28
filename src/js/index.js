function insert(num){
   let numberJs =  document.getElementById('result').innerHTML;
         document.getElementById('result').innerHTML = numberJs + num;
};

function clean(){
    document.getElementById('result').innerHTML = "";
}

function back(){
    let deletJs = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = deletJs.substring(0, deletJs.length -1)
}

function result(){
    let resultJs = document.getElementById('result').innerHTML;
    
    if(resultJs){
         let resultJs2 = document.getElementById('result').innerHTML = eval(resultJs);
    }
}

// var visibilidade = true;

// function ocultarExibir(){
    
//     if(visibilidade){
//         document.getElementById('signals').id = 'n'
//         visibilidade = false
//     }
//     else{
//         document.getElementById('signals').style.display = 'block'
//         visibilidade = true;
//     }

// }

// document.getElementById("signals").addEventListener("click", sinais);
// function sinais(event) {
//     if (event.target.classList.contains('signals')){
//         event.target.classList.remove('signals');
//         event.target.classList.add('signals2');
//     } else {
//         event.target.classList.remove('signals2');
//         event.target.classList.add('signals');
//     }
// }
