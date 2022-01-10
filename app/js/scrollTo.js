function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
 
  var button1 = document.querySelector('#header__menu__item1');
  var button2 = document.querySelector('#header__menu__item2');
  var button3 = document.querySelector('#header__menu__item3');
  var button4 = document.querySelector('#header__menu__item4');
  var button5 = document.querySelector('#header__video__bottom');

  var header__video = document.querySelector('.header__video');
  var contact = document.querySelector('.contact');
  var about = document.querySelector('.about');
  var project = document.querySelector('.project');
 

  button1.addEventListener('click', () => {
    scrollTo(header__video);
  })
  button2.addEventListener('click', () => {
    scrollTo(about);
  })
  button3.addEventListener('click', () => {
    scrollTo(project);
  })
  button4.addEventListener('click', () => {
    scrollTo(contact);
  })
  button5.addEventListener('click', () => {
    scrollTo(project);
  })

  //////////////////////////////////////////////////////////
   //////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////

  window.onscroll = function() {scrollFunction()};
var BStyle = document.getElementById("header__menu").style;
// var BStyle2 = document.getElementById("header__menu__item2").style;
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    BStyle.backgroundColor = "rgb(0, 0, 0, 0.3)"
  } else {
    BStyle.backgroundColor = "rgb(0, 0, 0 )"
  }
}

////////////////////////////////////////////////////////////////////////
document.querySelector('.c-hamburger').addEventListener('click', function (e) {
  e.preventDefault();
 if(this.classList.contains('is-active')){
     this.classList.remove('is-active');
     document.querySelector('.header__menu').classList.remove('nav-active');
     document.querySelector('.header__menu__item').classList.remove('nav-active');
 } else {
     this.classList.add('is-active');
     document.querySelector('.header__menu').classList.add('nav-active');
     document.querySelector('.header__menu__item').classList.add('nav-active');
 }
})