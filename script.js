let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for(item of buttons){
    item.addEventListener('click',(e) => {
        buttonText = e.target.innerText;
        console.log('Button text is',buttonText);
        if(buttonText == '*'){
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'AC'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue *= 0.01;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue; 
        }
    })
}
