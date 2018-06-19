$(document).ready(function(){

  //probably change name of sticky class to stickyTop to allow for a sticky bot as well
  //make note about stickytop remove being before changing the active id
  
  $('nav ul a').on('click', function(){
    $('.stickyTop, .stickyBot').remove();
    //$('.stickyBot').remove();
    //when clicking quickyly weird activity with navbar actives -- probably can give time out of one second here or move to animate function and do the same thing
    //try removeAttr(#active)
    $('#active').attr('id', '');
    $(this).attr('id', 'active'); 
  });
  

  
  //move this to after the nav ul function to make more sense in documeent flow
  $('a.home').click(function(){
    $('#active').attr('id', '');
    $('nav ul a').first().attr('id', 'active');
    $('#navlist').scrollTop(0);
    $('.stickyTop, .stickyBot').remove();
    //$('.stickyBot').remove();
  });
  console.log($('footer').height());
  
  
  //maybe put a if que clear function in function after animate ends for true, else normalScroll still equals false
  var normalScroll = true;
  $('.nav-link, .home').click(function(e){
    e.preventDefault();
    normalScroll = false;
    //$('.stickyTop, .stickyBot').remove(); -- this works and comment out remove() from other click functions
    $('html, body').animate(
      {scrollTop: $(this.hash).offset().top},
    1000, function(){
      normalScroll = true;
    });
  });

  //let highlightScroll = function(){
    
    
  $(document).scroll(function(){
    stickyNavTop();
    stickyNavBot();
    if(normalScroll){
      
      $('nav ul a').each(function(){
        //maybe change pixel subtraction from top on media query if 150 is to much -- if easier and looks ok maybe just change them both to 100 or so
        
        if($(document).scrollTop() > $(this.hash).offset().top - 100){ //this is good if window is between 400 and 
          
          $(this).attr('id', 'active');
          $(this).siblings().attr('id', '');
          
          //can also use .prev().prev() remove id and .next() remove id
          //the following snippet works pretty well but is kind of abrupt/not user friendly --maybe add in something similar to where if active is clicked and ula#active is above zero then scroll up
          /*
          $('.sticky').remove();
          if($('#active').position().top < 0){
            $('#navlist').scrollTop($('nav ul a#active li').position().top)
          }
          */
         console.log($(document).scrollTop());
         console.log($(document).height());
         console.log($(document).width());
         console.log($('.main-section').width());
         
        }
        
        if($(document).scrollTop() >= $(document).height() - $(window).height() - 25){
            
          $('nav ul a').last().attr('id', 'active');
          $('nav ul a').last().siblings().attr('id', '');
          //$(this).next().attr('id', 'active');
          //$(this).prev().attr('id', '');
        }
        
      });
      
    } 
    //weird behavior when clicking fast - try using timeouts
    //stickyNavTop();
    //stickyNavBot();
  }); 
  
  //highlightScroll();
  

  //93.99147033691406
  //52.4858
  $('#navlist').scroll(function(){
    console.log($(window).height());
    console.log($('#active').height());
    console.log($('nav ul a#active').position().top);
    stickyNavTop();
    stickyNavBot();
    console.log($('#navlist a').first());
    console.log($('#navlist a').first().attr('class'));
  });

  //try/research syntax for jquery --> $.fn.stickyNavTop = function() ... then call with $.fn.stickyNavTop
  //try switching clone and prepend to after the removal of sticky functions
  //try switching entire ifs -- if navlist first equals sticky top remove, else clone and prepend
  let stickyNavTop = function(){
    //figure out why the if(attr !== class) is not needed for stickyTop but is needed for stickyBot
    if($('#navlist a').first().attr('class') !== 'nav-link stickyTop'){
      if($('#active').position().top < 0){
        $('#navbar a#active').clone().prependTo('#navlist').addClass('stickyTop');
      }
    } else{
      if($('nav ul a#active').position().top > 0) { 
        $('.stickyTop').remove();
      } else if($('.stickyTop li').html() !== $('nav ul a#active li').html()){
        $('.stickyTop').remove();
      }
    }
  } 

  console.log($('#logo').height());
  //this will have to have a separate function on media query
  
  let stickyNavBot = function(){
    if($('#navlist a').first().attr('class') !== 'nav-link stickyBot'){
      if ($('#active').position().top >= $(window).height() - 93.99147033691406 - 52.4858){
        console.log('bottom');
        //let bottomSticky = $(window).height() - 52.4858;
        //$('#navbar a#active.stickyBot').css({'top': 'bottomSticky'});
        $('#navbar a#active').clone().prependTo('#navlist').addClass('stickyBot');
      } 
    } else {
      if($('nav ul a#active').position().top < $(window).height() - 93.99147033691406 - 52.4858){
        $('.stickyBot').remove();
      } else if ($('.stickyBot li').html() !== $('nav ul a#active li').html()){
        $('.stickyBot').remove();
      }
    }
    console.log($('.stickyBot'));
    
  }

  //navbot for media query
  /*
  let stickyNavBot = function(){
    if ($('#active').position().top > nav height
  }
  */

}); 
