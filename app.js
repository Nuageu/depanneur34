
// /********************************Carousel */
// var image_carou = document.getElementsByClassName('image_carou')
// var image_actu = 0;

// var image_taille = image_carou.length;

// var precedent = document.querySelector(".precedent")
// var suivant = document.querySelector(".suivant")

// function enleverActiveImages(){
//     for (let i = 0; i < image_taille ; i++){
//         image_carou[i].classList.remove('active');
//     }
// }

// suivant.addEventListener('click',function(){
//     image_actu++;
//     if(image_actu >= image_taille){
//         image_actu = 0;
//         // console.log(image_actu);
//     }
//     enleverActiveImages();
//     image_carou[image_actu].classList.add('active');
// })

// precedent.addEventListener('click',function(){
//     image_actu--;
//     if(image_actu < 0){
//         image_actu = image_taille -1;
//         // console.log(image_actu);
//     }
//     enleverActiveImages();
//     image_carou[image_actu].classList.add('active');
// })

// setInterval(function(){
//     image_actu++;
//     if(image_actu >= image_taille){
//         image_actu = 0;
//         // console.log(image_actu);
//     }
//     enleverActiveImages();
//     image_carou[image_actu].classList.add('active');
// }, 10000)

/************** Emergency display phone */

const serviceUrg = document.querySelector('#ServiceUrgence')

// window.addEventListener("load", function ()
// {
//     if (window.innerWidth < 810) {
//         serviceUrg.classList.add("actived");
//   }
// })

window.onload = () => {
    if (window.innerWidth <= 810) {
        serviceUrg.classList.add("actived");
  }
  };
window.addEventListener("resize", function() {
    if (window.innerWidth >= 811) {
        serviceUrg.classList.remove("actived"); 
    } 
  });

  window.addEventListener("resize", function() {
      if (window.innerWidth <= 810) {
          serviceUrg.classList.add("actived");
    }
  });

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


///**************************** remove #id from redirect and smooth scroll to the section */

  //Get all the hyperlink elements
var links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function(elem, index) {
  //Get the hyperlink target and if it refers to an id go inside condition
  var elemAttr = elem.getAttribute("href");
  if(elemAttr && elemAttr.includes("#")) {
    //Replace the regular action with a scrolling to target on click
    elem.addEventListener("click", function(ev) {
      ev.preventDefault();
      //Scroll to the target element using replace() and regex to find the href's target id
      document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
          });
    });
  }
});