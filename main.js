

/*var slider_content = document.querySelector('#box');
  var image = ['a', 'b','c'];
  var i = image.length;
  function nextImage(){
    if (i<image.length) {
      
      i = i+1;
    }else
    {
      i = 1;
    }
    slider_content.innerHTML = "<img src ="+image[i-1]+".jpg>";
    clearInterval(nextImage);
    
  }
  setInterval(nextImage, 3000);
  function prewImage (){
   
    if (i<image.length+1 && i>1){
      i = i-1;
    }else
    {
      i = image.length;
    }
    slider_content.innerHTML = "<img src ="+image[i-1]+".jpg>";
    clearInterval(nextImage);
  }*/

  /*hamburgor menu*/
  let togglenavabr = false;

let togglenavbarstatus = function(){


    let togglebtn = document.querySelector("header .hamburger");

   let togglesidebar = document.querySelector(".sidebar");
   let toggleul = document.querySelector(".sidebar ul");
   let toggleli = document.querySelector(".sidebar ul li");
  
   if(togglenavabr === false){
       togglebtn.style.backgroundSize = "30%";
       togglebtn.style.backgroundImage = "url(img/menu2.png)";
       togglesidebar.style.visibility = "visible";
       toggleul.style.width = "275px";
       toggleul.style.visibility= "visible";
       togglenavabr = true;

   } else if(togglenavabr === true)
   {  
      togglebtn.style.backgroundImage = "url(img/menu.png)";
      togglesidebar.style.visibility = "hidden";
       toggleul.style.width = "0px";
       toggleul.style.visibility
        = "hidden";
       togglenavabr = false;
   }
}
  
/*IMage SLider */
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prew');
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () =>{
    const current = document.querySelector('.current');
    //remove current  class
    current.classList.remove('current');
    // cehck for necxt slide
    if(current.nextElementSibling){
        // add current to next sibling
        current.nextElementSibling.classList.add('current');
    }else{
        // add current to start
        slides[0].classList.add('current');

    }
    setTimeout(()=> current.classList.remove('current'));
}

const prewSlide = () =>{
    const current = document.querySelector('.current');
    //remove current  class
    current.classList.remove('current');
    // cehck for necxt slide
    if(current.previousElementSibling){
        // add current to next sibling
        current.previousElementSibling.classList.add('current');
    }else{
        // add current to start
        slides[slides.length -1].classList.add('current');

    }
    setTimeout(()=> current.classList.remove('current'));
}

next.addEventListener('click', e =>{
    nextSlide();
    clearInterval(slideInterval);
    if(auto){
        slideInterval = setInterval(nextSlide, intervalTime);
      }
});
prev.addEventListener('click', e =>{
    prewSlide();
    clearInterval(slideInterval);
    if(auto){
        slideInterval = setInterval(nextSlide, intervalTime);
      }
} );

if(auto){
  slideInterval = setInterval(nextSlide, intervalTime);
}