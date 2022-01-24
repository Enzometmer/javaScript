// img click and over

let img = document.createElement('img');

img.src = '/Partie5_dom/assets/img/suricate.jpg';

let block = document.getElementById('x');
block.appendChild(img);

block.addEventListener('click',() =>{

    if (img.src) {
        img.src = '/Partie5_dom/assets/img/tarentule.jpg'
    } else {
        img.src = '/Partie5_dom/assets/img/suricate.jpg'
    }
});