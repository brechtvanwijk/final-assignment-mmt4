// accordion
$(document).ready(function(){
    $(".accordion_header").click(function(){
      $(".accordion_header").removeClass("active");
      $(this).addClass("active");
    })
  });

// slider
  $(document).ready(function(){
    $('.post-wrapper').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2500,
      nextArrow: $('.fas fa-chevron-left prev'),
      prevArrow: $('.fas fa-chevron-right next'),
      responsive: [{
          breakpoint: 1300,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 900,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      }
  ]
    });

  });
// darkmode
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function(){
    if(this.checked) {
        trans()
           $('main').css({'background-color':'black'});
           $('nav').css({'background-color':'#1D00FF'});
           $('nav a').css({'color':'white'});
           $('.inhoud').css({'background-color':'blue'});
           $('.post-slider .post-wrapper .post').css({'background-color':'blue'});
           $('.gradient').css({'background':'linear-gradient(#1912FF, #0076FF)'});
           $('.accordion_wrap').css({'border':'solid 3px blue'});
           $('.inhoud h2').css({'color':'white'});
           
           $('h7').css({'color':'white'});
           $('.support-wrap p').css({'color':'white'});
           $('.contact-btn').css({'background-color':'blue'});
           $('.footer-knop').css({'background-color':'blue'});
           $('.footer-knop').css({'color':'white'});
           $('.footer-knop').css({'border':'solid 3px #CC0085'});

       
    } else {
        trans()
           $('main').css({'background-color':'white'});
           $('nav').css({'background-color':'white'});
           $('nav a').css({'color':'#CC0085'});
           $('.inhoud').css({'background-color':'#F4F2FF;'});
           $('.post-slider .post-wrapper .post').css({'background-color':'rgb(244, 242, 255);'});
           $('.gradient').css({'background':'linear-gradient(#F691D3, #CC0085)'});
           $('.accordion_wrap').css({'border':'solid 3px #CC0085'});
           $('.inhoud h2').css({'color':'#CC0085'});
           $('h7').css({'color':'#CC0085'});
           $('.support-wrap p').css({'color':'#CC0085'});
           $('.contact-btn').css({'background-color':'#CC0085'});
           $('.footer-knop').css({'background-color':'white'});
           $('.footer-knop').css({'color':'#CC0085'});
           $('.footer-knop').css({'border-style':'none'});
           

           $('').css({'':''});
           
        
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    },1000)
}

/*video-buttons*/
$(document).ready(function(){
    $('.playButton').click(function(){
      $('img').toggleClass('active')
    })
    });
    
    var video = document.querySelector('.video-js');
    var btn = document.querySelector('.playButton');
    
    function togglePlayPause(){
     if(video.paused){
      video.play();
     } else{
       video.pause();
     }
    }
    btn.onclick = function(){
     togglePlayPause();
    };
  

    // pop up
    $('video').each(function (i, el){
        var v1 = $(el).parent();
        var videoT = videojs(el);
      
          $('video', v1).on('timeupdate', function(){
          var time = videoT.currentTime();
          var duration = videoT.duration();
          
          console.log(time);
      
          var v2= $(el).parent();
      
          if( time>= duration) {
            console.log('einde!')
      
            v2.append('<div class="modal-popup"><div class="popup"><p>Einde van deze video! Kijk de volgende <br> om verder te gaan met de workshop</p><button>Close</button></div></div>');
          }
          });
      });


