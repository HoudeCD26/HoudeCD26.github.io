
  window.addEventListener('scroll',reveal);
  function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for (var i=0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 150;

      if(revealTop < windowHeight - revealPoint){

        reveals[i].classList.add('active');

      }else{
        reveals[i].classList.remove('active');

      }
    }
  }

  function showMenu(){
   document.querySelector('.navigation').classList.toggle('active');
   document.querySelector('.menu').classList.toggle('hide');
   document.querySelector('.close').classList.toggle('show');
  } 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("logo-images").style.width = "2.8rem";
      document.getElementById("navigation-bar").style.padding = "0.8rem 0";
    } else{
      document.getElementById("logo-images").style.width = "4rem";
      document.getElementById("navigation-bar").style.padding = "1.2rem 0";
    
    }
    }

    const carousel = document.querySelector(".articles-carousel");
    const arrowBtns = document.querySelectorAll(".articles-wrapper i");
    const firstCardWidth = document.querySelector(".articles-card").offsetWidth;
    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
        });
    });
