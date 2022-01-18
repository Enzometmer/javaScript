// exercice 4

let result = prompt('Veuilliez saisir votre nombre')
if (result < 4) {
    alert('nul');
}
else if(result >= 4 && result <= 6) {
    alert('Moyens!')
}
else if(result >= 6 && result <= 8) {
    alert('Assez bien!')
}
else if(result >= 8 && result <= 9) {
    alert('Bien!')
}
else if(result == 10) {
    alert('Excelent')
}