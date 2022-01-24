// exercice 4

let result = prompt('Veuillez saisir votre nombre')
if (result <0 || result >10) {
    alert ('Veuillez saisir un nombre entre 0 et 10')
} else {
    if (result < 4) {
        alert('nul');
    }
    else if(result < 6) {
        alert('Moyen!')
    }
    else if(result < 8) {
        alert('Assez bien!')
    }
    else if(result <= 9) {
        alert('Bien!')
    }
    else if(result == 10) {
        alert('Excelent')
    }
}
