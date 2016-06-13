$(document).ready(function(){       
   var scroll_start = 400;
   var startchange = $('section.change');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar").css('background', 'white');
       } else {
          $('.navbar').css('background', 'transparent');
       }
       if(scroll_start > 200){
            $("#stage").css({
            'opacity' : 1-(($(this).scrollTop())/7000)
            });
       }
       if(scroll_start==0){
           $("#stage").css({
            'opacity' : 1
            });
       }    
   });
    }
});

