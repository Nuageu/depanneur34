var image_carou = document.getElementsByClassName('image_carou')
var image_actu = 0;

var image_taille = image_carou.length;

var precedent = document.querySelector(".precedent")
var suivant = document.querySelector(".suivant")

function enleverActiveImages(){
    for (let i = 0; i < image_taille ; i++){
        image_carou[i].classList.remove('active');
    }
}

suivant.addEventListener('click',function(){
    image_actu++;
    if(image_actu >= image_taille){
        image_actu = 0;
        // console.log(image_actu);
    }
    enleverActiveImages();
    image_carou[image_actu].classList.add('active');
})

precedent.addEventListener('click',function(){
    image_actu--;
    if(image_actu < 0){
        image_actu = image_taille -1;
        // console.log(image_actu);
    }
    enleverActiveImages();
    image_carou[image_actu].classList.add('active');
})

setInterval(function(){
    image_actu++;
    if(image_actu >= image_taille){
        image_actu = 0;
        // console.log(image_actu);
    }
    enleverActiveImages();
    image_carou[image_actu].classList.add('active');
},10000)