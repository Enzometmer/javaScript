// Exercice 3

// Les Regex

// getElementsByID in HTML
let InputName     = document.getElementById('InputName');
let InputEmail    = document.getElementById('InputEmail');
let InputDate     = document.getElementById('InputDate');
// regex for name, mail and years
let regexName     = new RegExp(/^([a-zA-Z ]+)$/);
let regexMail     = new RegExp(/^[a-zA-Z0-9-]+[a-zA-Z0-9.-]*@[a-zA-Z0-9-]+.[a-zA-Z.-]{1,}[a-zA-Z-_]+$/);
let regexAge      = new RegExp(/^[0-9]{1,3}$/);
// getElementsByClassName in HTML
let warningName     = document.getElementsByClassName('fakeName');
let warningMail     = document.getElementsByClassName('fakeMail');
let warningDate     = document.getElementsByClassName('fakeDate');
// getElementsByID in HTML
let button          = document.getElementById('buttonClick');

function form() {

    if (InputName.value.match(regexName)) {
        warningName[0].innerHTML = ('C\'est ok');
    } else { 
        warningName[0].innerHTML = ('Veuillez saisir uniquement des lettres');
    }

    if (InputEmail.value.match(regexMail)) {
        warningMail[0].innerHTML = ('C\'est ok');
    } else {
        warningMail[0].innerHTML = ('Veuillez saisir une adresse mail valide');
    }

    if (InputDate.value.match(regexAge)) {
        warningDate[0].innerHTML = ('C\'est ok');
    } else {
        warningDate[0].innerHTML = ('Veuillez saisir uniquement votre âge');
    }
};

button.addEventListener('click', () => {
    form();
});