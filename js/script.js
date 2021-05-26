let swipeOption = {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  speed: 1000,
}
new Swiper('.swiper-container', swipeOption);
  
  
  
  /*******************          header          **********************/
  var headerTime = 500;
  /*******************header-navの出現方法**********************/
  /*** 2.headerのburger 上下のスライド ***/
  // $('#burger-btn').on('click',function(){
  //   $('#header-nav').slideToggle(headerTime);
  //   $(this).toggleClass('scroll');
  // });
  // /** 遷移したらheaderを閉じる **/
  // $('.nav-item a').click(function(){
  //   setTimeout(function(){
  //     $('#burger-btn').toggleClass('scroll');
  //   },headerTime);
  //   $('#header-nav').delay(headerTime).slideToggle(headerTime);
  // });
  /*************end of header-navの出現方法**********************/


  /********  PCサイズの時にheader-navが見えるようにする **************/
  $(window).on("load resize", function() {
    // // ロードとリサイズ時の処理
    // var win = $(window).width();
    // if(win > 1021){
    //   $('#header-nav').show();
    // }else{
    //   $('#header-nav').hide();
    // }
  });
  /******** end of PCサイズの時にheader-navが見えるようにする ******/
  
  //headerのボタンを押したときにスクロール
  $('.nav-item a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    
    $('html,body').animate({ 
      'scrollTop': position 
    }, headerTime);
  });
  /*******************        end of header        *******************/
  