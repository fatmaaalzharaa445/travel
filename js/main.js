
// menu for responsive  small screen
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}
// ////////////////////////scroll
let Btn =document.getElementById("btn");

Btn.addEventListener("click",()=>{
    window.scrollTo({
        top:100,
        behavior:"smooth"
    })

})


window.addEventListener("scroll",()=>{
    let slide = document.querySelectorAll(".demo");
    for(let i=0; i<slide.length; i++)
    {
        let windowHeight =window.innerHeight;
        let slideTop =slide[i].getBoundingClientRect().top;
        let revelpoint = 150;
        if(slideTop < windowHeight - revelpoint){
            slide[i].classList.add('active');
        }
        else{
            slide[i].classList.remove('active');
        }
    }
})

// /////////////////slide 
let itemSec = Array.from( document.getElementsByClassName("itemclass"));
let lightboxContainer= document.querySelector(".light-box");
let lightboxItem= document.querySelector('.lightbox-item');
let nextBtn=document.getElementById('next');
let prevBtn=document.getElementById('prev');
let closeBtn=document.getElementById('close');
let currentIndex = 0;
for( let i=0; i<itemSec.length;i++){
  itemSec[i].addEventListener('click',function (e){
       currentIndex= itemSec.indexOf(e.target);
   
     let imgSrc= e.target.getAttribute('src');
    lightboxContainer.style.display="flex";
    lightboxItem.style.backgroundImage -`url(${imgSrc})`
  })
}




function Slide(i){
    currentIndex =currentIndex+i;
    if(currentIndex == -1)
    {
        currentIndex= itemSec.length -1;
    }

    if(currentIndex == itemSec.length)
    {
        currentIndex=0;
    }

      let imgSrc= itemSec[currentIndex].getAttribute('src');
       lightboxItem.style.backgroundImage =`url(${imgSrc})`
    }
    
    prevBtn.addEventListener('click',function(){
        Slide(1);
    });
    nextBtn.addEventListener('click',function(){
        Slide(-1);
    });

    function Close(){
        lightboxContainer.style.display="none";
    }

    closeBtn.addEventListener('click',Close);


//nav bar location page


let destAn = document.getElementById('dest');
 destAn.addEventListener('click',function(){
  
   
    
     window.location.href="destination.html";
   
 })  

 let logOut =document.getElementById('logOut');
 let canCelBtn=document.getElementById('canCel');
 let okBtn =document.getElementById('okBtn');
 let pops=document.getElementById('pops');
 logOut.addEventListener('click',()=>{
   pops.style.display="flex";
 })

 canCelBtn.addEventListener('click',()=>{
    pops.style.display="none";
  })
  okBtn.addEventListener('click',()=>{
    window.location.href="index.html";
  })