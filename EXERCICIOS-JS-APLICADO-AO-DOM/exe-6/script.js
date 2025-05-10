// O ONCLICK NO HTML SIGNIFICA QUE AO CLICARMOS NO ELEMENTO QUE COLOCAMOS O ONCLICK
// VAI EXECUTAR A FUNÇÃO QUE PASSAMOS DENTRO DESSE ONCLICK
function caltoDisplay(data){
    document.querySelector('#display').value += data;
}

function back(){
    const display = document.querySelector('#display');

    display.value = display.value.slice(0, -1);
}

function clean(){
    document.querySelector('#display').value = '';
}


function calcResult(){
    const display = document.querySelector('#display');

    try{
        display.value = eval(display.value); //esse método consegue entender funções matemáticas.
    } catch{
         display.value = 'Error';
    }

}