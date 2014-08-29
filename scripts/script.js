var i = 0;
var arr = ['video/p1.mp4', 'video/p2.mp4', 'video/p3.mp4', 'video/p4.mp4'];
var song = ['music/p1f.mp3', 'music/p2f.mp3', 'music/p3f.mp3', 'music/p4f.mp3'];

// center slider
var middle = $(window).width() * 0.40;
$('ul').css('left', middle + 'px');

$(function() {
  //default all volume to 0
  document.getElementById('a1').volume = 0;
  document.getElementById('a2').volume = 0;
  document.getElementById('a3').volume = 0;
  document.getElementById('a4').volume = 0;

  //Fake button code to get around ios autoplay issue?
  var fakeOnClick = function() {
    playVideo(0);
    aud(0);
  };
  var fakeButton = document.getElementById('fakeButton');
  fakeButton.addEventListener('click', fakeOnClick, false);
  $('#fakeButton').click();

  // navigation
  $('#right').click(function(){
    i++;
    if(i === 4) {
      i = 0;
    } 
    playVideo(i);
    slider(i);
    aud(i);
  });

  $('#left').click(function(){
    i--;
    if(i < 0) {
      i = 3;
    }
    playVideo(i);
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
      playVideo(i);
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
      playVideo(i);
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
    $('.mute').css("background-image", "url(img/mute.png)");
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
  })*/


});

//plays video number i from array
function playVideo(i) {
  $('#bgvid').attr('src', arr[i]);
  $('#bgvid').get(0).play();
}

// sets volume of song loops
function aud(i) {
  var Id = i + 1;
  var x = 1;
  while (x<=Id){
    var playElementId = 'a' + x;
    document.getElementById(playElementId).volume = 1;
    //mutes song loops ['5' should not be hardcoded but should be set at (number of items in song array + 1)]
      if(Id<5){
        var muteX = x + 1;
        var muteElementId = 'a' + muteX;
        document.getElementById(muteElementId).volume = 0;
      }
    x++;
  }
}

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