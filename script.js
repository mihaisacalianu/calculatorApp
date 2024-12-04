window.addEventListener('DOMContentLoaded',init);
function checkButtonValue(value){
    numbers = [0,1,2,3,4,5,6,7,8,9];
    if(numbers.includes(parseInt(value))){
        return true;
        //console.log();
    }else{
        return false;
    }
}
function init(){
    const input = document.getElementById('input');
    var numbersBtns = [];
    var operationBtns = [];
    const buttons = document.querySelectorAll('button');

    buttons.forEach((btn)=>{
        if(checkButtonValue(btn.value) === true){
            numbersBtns.push(btn);
        }else{
            operationBtns.push(btn);
        }
            
    }
        
);
    numbersBtns.forEach((btn)=>btn.addEventListener('click',function(){
        if(input.value === 0){
            input.value = btn.value;
        }else{
            input.value += btn.value;
        }

    }));
    operationBtns.forEach((btn)=>btn.addEventListener('click',function() {
        if(btn.value === 'ac'){
            input.value = null;
            result = 0;
        }
        else if(btn.value === '+'){
            input.value += btn.value;
        }
        else if(btn.value === '-'){
            input.value += btn.value; 
        }
        else if(btn.value === '*'){
            input.value += btn.value; 
        }
        else if(btn.value === '/'){
            input.value += btn.value; 
        }
        else if(btn.value === '%'){
            input.value += btn.value; 
        }
        else if(btn.value === '='){
            input.value = eval(input.value);
        }
    }));
 
}




