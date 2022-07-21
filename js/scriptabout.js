let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
}
)




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