$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>2){
          $('.navbar').addClass('sticky');
        }else{
          $('.navbar').removeClass('sticky');
        }
    });
    //toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});

//Typing amimation script

var typed = new Typed(".typing",{
  strings: ["Creator","Designer","Devloper","Teacher"],
  typeSpeed:100,
  backSpeed:60,
  loop: true
});

var typed01 = new Typed(".typing-02",{
  strings: ["Creator","Designer","Devloper","Teacher"],
  typeSpeed:100,
  backSpeed:60,
  loop: true
});
