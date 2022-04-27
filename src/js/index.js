function insert(num){
   let numberJs =  document.getElementById('result').innerHTML;
   let resultJs2 =  document.getElementById('result').innerHTML = numberJs + num;
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
         document.getElementById('result').innerHTML = eval(resultJs);
    }
}

