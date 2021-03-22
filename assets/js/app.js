let secret = Math.floor(Math.random() * 100) + 1;

let i = 10;

function number(){
    answearPlace.innerHTML = "Дать ответ";
    let variant = +userVariant.value;
    if(variant == secret){
        resultPlace3.innerHTML = (`Поздравляю! Вы угадали число:${secret}`);
        resultPlace2.innerHTML = (`${secret}`);
        secret = Math.floor(Math.random() * 100) + 1;
        i = 11;
    }else if(i <= 1){
        resultPlace3.innerHTML = (`Вы проиграли,а число было таким:${secret}`);
        secret = Math.floor(Math.random() * 100) + 1;
        i = 11; 
    }else if(variant == 0){
        resultPlace3.innerHTML = (`Введите число`);
    }
    else if(variant > secret){
        resultPlace3.innerHTML = (`Ваше число ${variant} больше неизвестного!`);
    }else if(variant < secret){
        resultPlace3.innerHTML = (`Ваше число ${variant} меньше неизвестного!`);
    }
    i--;
    resultPlace1.innerHTML = `${i}`;
    document.getElementById('userVariant').value = '';
}