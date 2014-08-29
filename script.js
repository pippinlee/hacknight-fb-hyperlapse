var i = 0;
var arr = ['p1.mp4', 'p2.mp4', 'p3.mp4', 'p4.mp4'];
var song = ['p1f.mp3', 'p2f.mp3', 'p3f.mp3', 'p4f.mp3'];

// center slider
var middle = $(window).width() * 0.40;
$('ul').css('left', middle + 'px');


$(function() {
  //music
  //set volume of last 3 pieces to 0
  document.getElementById('a2').volume = 0;
  document.getElementById('a3').volume = 0;
  document.getElementById('a4').volume = 0;
  //document.getElementById('a1').volume = 0;



  // navigation

  $('#right').click(function(){
    i++;
    if(i === 4) {
      i = 0;
    } 
    $('video').attr('src', arr[i]);
    slider(i);
    aud(i);
  });

  $('#left').click(function(){
    i--;
    if(i < 0) {
      i = 3;
    }
    $('video').attr('src', arr[i]);
    slider(i);
    aud(i);
  });

  $(document).keydown(function(e){
    // right arrow
    if (e.keyCode === 39) {
      i++;
      if(i === 4) {
        i = 0;
      } 
      $('video').attr('src', arr[i]);
      slider(i);
      aud(i);
      //mute();
    }
    // left arrow
    if (e.keyCode === 37) {
      i--;
      if(i < 0) {
        i = 3;
      }
      $('video').attr('src', arr[i]);
      slider(i);
      aud(i);
      //mute();
    }
  });

  $('.mute').click(function(){
    document.getElementById('a1').volume = 0;
    document.getElementById('a2').volume = 0;
    document.getElementById('a3').volume = 0;
    document.getElementById('a4').volume = 0;
    $('.mute').css("background-image", "url(mute.png)");
  })

  /*
  $('.mute').click(function(){
    document.getElementById('a1').volume = 0;
    document.getElementById('a2').volume = 0;
    document.getElementById('a3').volume = 0;
    document.getElementById('a4').volume = 0;
  })
  */

  /*
  var muted = false

  $('.mute').click(function() {
    mute();
  })


  function mute() {
    $('.mute').on('click', function(){
     if (!muted){
      //function
      muted = true;
      console.log(muted);
      $('.mute').css("background-image", "url(mute.png)");
      document.getElementById('a1').volume = 0;
      document.getElementById('a2').volume = 0;
      document.getElementById('a3').volume = 0;
      document.getElementById('a4').volume = 0;
     }
     else {
      //function
      muted = false;
      console.log(muted);
      $('.mute').css("background-image", "url(unmute.png)");
      aud(i);
     }
    });
  }
  */

  function slider(i) {
    if(i === 0) {
      //console.log('i is 0');
      $('ul li').css('background-color', "rgba(255, 255, 255, 0.55)");
      $( "ul li:nth-child(1)" ).css( "background-color", "rgba(247, 255, 157, 0.95)" );
    } else if (i === 1) {
      //console.log('i is 1');
      $('ul li').css('background-color', "rgba(255, 255, 255, 0.55)");
      $( "ul li:nth-child(2)" ).css( "background-color", "rgba(247, 255, 157, 0.95)" );
    } else if (i === 2) {
      $('ul li').css('background-color', "rgba(255, 255, 255, 0.55)");
      //console.log('i is 2');
      $( "ul li:nth-child(3)" ).css( "background-color", "rgba(247, 255, 157, 0.95)" );
    } else if (i === 3) {
      $('ul li').css('background-color', "rgba(255, 255, 255, 0.55)");
      //console.log('i is 3');
      $( "ul li:nth-child(4)" ).css( "background-color", "rgba(247, 255, 157, 0.95)" );
    }
  }

  function aud(i) {
    if(i === 0) {
      //console.log(i);
      document.getElementById('a1').volume = 1;
      document.getElementById('a2').volume = 0;
      document.getElementById('a3').volume = 0;
      document.getElementById('a4').volume = 0;
    } else if(i ===1) {
      //console.log(i);
      document.getElementById('a1').volume = 1;
      document.getElementById('a2').volume = 1;
      document.getElementById('a3').volume = 0;
      document.getElementById('a4').volume = 0;
    } else if(i === 2) {
      //console.log(i);
      document.getElementById('a1').volume = 1;
      document.getElementById('a2').volume = 1;
      document.getElementById('a3').volume = 1;
      document.getElementById('a4').volume = 0;
    } else if(i === 3) {
      //console.log(i);
      document.getElementById('a1').volume = 1;
      document.getElementById('a2').volume = 1;
      document.getElementById('a3').volume = 1;
      document.getElementById('a4').volume = 1;
    }
  }

});