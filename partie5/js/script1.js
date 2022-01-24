// Manipulation du DOM

let button = document.getElementById('buttonClick');
button.onclick = function(){
    passWord()
};

function passWord() {

    let passWord1 = document.getElementById('InputPassword1');
    let passWord2 = document.getElementById('InputPassword2');

    if (passWord1.value != passWord2.value) {
        passWord1.style.backgroundColor='red';
        passWord2.style.backgroundColor='red';
    } else {
        passWord1.style.backgroundColor='green';
        passWord2.style.backgroundColor='green';
    }
};