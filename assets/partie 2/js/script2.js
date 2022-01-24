// exercice 2

let myAge = Number(prompt('Quel âge as tu ?', 'entrer votre âge'));
console.log (isNaN (myAge))
if (isNaN(myAge)|| myAge < 0 || myAge > 100){
    alert ('erreur')
} else {
    if(myAge >=18 ){
        alert('vous êtes majeur!');
    } else {
        alert('Vous êtes mineur');
    }
}



