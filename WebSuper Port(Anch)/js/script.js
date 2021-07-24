$(".recent-slider").slick({
    arrows:false,
    slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        
      
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
   })
   logoSize = function(){
    var headerOffset = $(window).height() + 6550;
    var maxScrollDistance = 7600;
    $(window).scroll(function() {
        var percentage = maxScrollDistance /$(document).scrollTop();
        console.log(percentage)
        console.log($('.circle-blue').css("width"))
        // console.log($(document).scrollTop())
        if (percentage >= headerOffset) {
            $('.circle-blue').css({
              'width':percentage*100,
              'height':percentage*100 
            });
        }
        else{
          $('.circle-blue').css('width', percentage );
          $('.circle-blue').css('height', percentage);
        }
    });

}

logoSize();