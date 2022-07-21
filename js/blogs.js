//this function is for Nav Bar Menu btn onlyyyyy..
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
}

//videoooo
let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
  btn.addEventListener('click', ()=>{
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn. getAttribute('data-src');
    document.querySelector('#video-slider').src = src;
  });
});


//hagat momken tat3ml
// function changeColor()
// {
//     var div=document.getElementById("firstDiv");
//     div.style.color="red";
// }
// function changeText(h1)
// {
//   h1.innerText="Ooops !!"
// }momken bdl by adim 2wl ma l mic yige 3lah asm l admin ex:sara magdy
//location


//images 1
function setNewImage(img1)
{
  document.getElementById("img1").src="project travel/images/des-5.jpg";
}
function setOldImage(img1)
{
  document.getElementById("img1").src = "project travel/images/blog-1.jpg";
}

// // //image 2

function NewImage(img2)
{
  document.getElementById("img2").src="project travel/images/2(1) blogs.jpg";
}
function OldImage(img2)
{
  document.getElementById("img2").src ="project travel/images/blog-2.jpg";
}

// //image 3
function setNewImagethird(img3)
{
  document.getElementById("img3").src="project travel/images/33.jpg";
}
function setOldImagethird(img3)
{
  document.getElementById("img3").src ="project travel/images/blog-3.jpg";
}

// //image 4
function setNewImagefour(img4)
{
  document.getElementById("img4").src="project travel/images/44.jpg";
}
function setOldImagefour(img4)
{
  document.getElementById("img4").src ="project travel/images/des-7.jpg";
}

// //image 5
function setNewImagefive(img5)
{
  document.getElementById("img5").src="project travel/images/g-2.jpg";
}
function setOldImagefive(img5)
{
  document.getElementById("img5").src ="project travel/images/des-1.jpg";
}

// //image 6
function setNewImagesix(img6)
{
  document.getElementById("img6").src="project travel/images/66.jpg";
}
function setOldImagesix(img6)
{
  document.getElementById("img6").src ="project travel/images/6.jpg";
}

/ //image7
function setNewImageseven(img7)
{
  document.getElementById("img7").src="project travel/images/77.jpg";
}
function setOldImageseven(img7)
{
  document.getElementById("img7").src ="project travel/images/7.jpg";
}

 //image8
function setNewImageeight(img8)
{
  document.getElementById("img8").src="project travel/images/88.jpg";
}
function setOldImageeight(img8)
{
  document.getElementById("img8").src ="project travel/images/8.jpg";
}

 //image9
 function setNewImagenine(img9)
 {
   document.getElementById("img9").src="project travel/images/9999.jpg";
 }
 function setOldImagenine(img9)
 {
   document.getElementById("img9").src ="project travel/images/999.jpg";
 }
 
 


//read more-------------------------------------------------------------------------------------------------------'



function readmore()
{
  var dots = document.getElementById("dots");
  var moretext = document.getElementById('more');
  var btn = document.getElementsByClassName('btn');

  if (dots.style.display==="none"){
    dots.style.display = "inline";
    btn.innerHTML = "read more";
    moretext.style.display = 'none';
  }else{
    dots.style.display = 'none';
    btn.innerHTML = "read less";
    moretext.style.display = 'inline';
  }
}

function readmore2()
{
  var dots = document.getElementById("dots2");
  var moretext = document.getElementById('more2');
  var btn = document.getElementsByClassName('btn');

  if (dots.style.display==="none"){
    dots.style.display = "inline";
    btn.innerHTML = "read more";
    moretext.style.display = 'none';
  }else{
    dots.style.display = 'none';
    btn.innerHTML = "read less";
    moretext.style.display = 'inline';
  }
}


function readmore3()
{
  var dots = document.getElementById("dots3");
  var moretext = document.getElementById('more3');
  var btn = document.getElementsByClassName('btn');

  if (dots.style.display==="none"){
    dots.style.display = "inline";
    btn.innerHTML = "read more";
    moretext.style.display = 'none';
  }else{
    dots.style.display = 'none';
    btn.innerHTML = "read less";
    moretext.style.display = 'inline';
  }
}

function readmore4()
{
  var dots = document.getElementById("dots4");
  var moretext = document.getElementById('more4');
  var btn = document.getElementsByClassName('btn');

  if (dots.style.display==="none"){
    dots.style.display = "inline";
    btn.innerHTML = "read more";
    moretext.style.display = 'none';
  }else{
    dots.style.display = 'none';
    btn.innerHTML = "read less";
    moretext.style.display = 'inline';
  }
}


function readmore5()
{
  var dots = document.getElementById("dots5");
  var moretext = document.getElementById('more5');
  var btn = document.getElementsByClassName('btn');

  if (dots.style.display==="none"){
    dots.style.display = "inline";
    btn.innerHTML = "read more";
    moretext.style.display = 'none';
  }else{
    dots.style.display = 'none';
    btn.innerHTML = "read less";
    moretext.style.display = 'inline';
  }
}



function readmore6()
{
  var dots = document.getElementById("dots6");
  var moretext = document.getElementById('more6');
  var btn = document.getElementsByClassName('btn');

  if (dots.style.display==="none"){
    dots.style.display = "inline";
    btn.innerHTML = "read more";
    moretext.style.display = 'none';
  }else{
    dots.style.display = 'none';
    btn.innerHTML = "read less";
    moretext.style.display = 'inline';
  }
}



function readmore7()
{
  var dots = document.getElementById("dots7");
  var moretext = document.getElementById('more7');
  var btn = document.getElementsByClassName('btn');

  if (dots.style.display==="none"){
    dots.style.display = "inline";
    btn.innerHTML = "read more";
    moretext.style.display = 'none';
  }else{
    dots.style.display = 'none';
    btn.innerHTML = "read less";
    moretext.style.display = 'inline';
  }
}

function readmore8()
{
  var dots = document.getElementById("dots8");
  var moretext = document.getElementById('more8');
  var btn = document.getElementsByClassName('btn');

  if (dots.style.display==="none"){
    dots.style.display = "inline";
    btn.innerHTML = "read more";
    moretext.style.display = 'none';
  }else{
    dots.style.display = 'none';
    btn.innerHTML = "read less";
    moretext.style.display = 'inline';
  }
}


function readmore9()
{
  var dots = document.getElementById("dots9");
  var moretext = document.getElementById('more9');
  var btn = document.getElementsByClassName('btn');

  if (dots.style.display==="none"){
    dots.style.display = "inline";
    btn.innerHTML = "read more";
    moretext.style.display = 'none';
  }else{
    dots.style.display = 'none';
    btn.innerHTML = "read less";
    moretext.style.display = 'inline';
  }
}


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