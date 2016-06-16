$(document).ready(function(){       
   var scroll_start = 400;
   var startchange = $('section.change');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top - 200) {
          $(".navbar").css('background', 'white');
       } else {
          $('.navbar').css('background', 'transparent');
       }
       if(scroll_start > 200){
            $("#stage").css({
            'opacity' : 1-(($(this).scrollTop())/9000)
            });
            $(".display-3").css({
            'opacity' : 1-(($(this).scrollTop())/1300)
            });
            $(".dis").css({
            'opacity' : 1-(($(this).scrollTop())/1300)
            });

       }
       if(scroll_start==0){
           $("#stage").css({
            'opacity' : 1
            });
       }    
   });
    }
    var ypos, image;
    function parallax(){
        ypos = window.pageYOffset;
        image = document.getElementById('stage');
        image.style.top = ypos * 0.4 + 'px';
    }
    window.addEventListener('scroll',parallax);

    $('.parallax-window').parallax({imageSrc: '../img/para.jpg'});

});

