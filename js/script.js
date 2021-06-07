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

$(function(){
  
  /*******************          header          **********************/
  var headerTime = 500;
  /*******************header-navの出現方法**********************/
  /*** 2.headerのburger 上下のスライド ***/
  $('#burger-btn').on('click',function(){
    $('#header-nav').slideToggle(headerTime);
    $(this).toggleClass('scroll');
    $('.nav-item a').css('color','#000');
    if($(this).hasClass('btn-index')){
      if($(this).hasClass('scroll')){
        $('#burger-btn .bar').css('background-color','#000');
      }else{
        if ($(window).scrollTop() < 1 ) {
          $('#burger-btn .bar').css('background-color','#fff');
        }else{
          $('#burger-btn .bar').css('background-color','#000');
        }
      }
    }else{
      
    }
  });
  /** 遷移したらheaderを閉じる **/
  $('.nav-item a').click(function(){
    setTimeout(function(){
      $('#burger-btn').toggleClass('scroll');
    },headerTime);
    $('#header-nav').delay(headerTime).slideToggle(headerTime);
  });
  /*************end of header-navの出現方法**********************/


  /********  PCサイズの時にheader-navが見えるようにする **************/
  $(window).on("load resize scroll", function() {
    // ロードとリサイズ時の処理
    var win = $(window).width();
    if(win > 900){
      $('#header-nav').show();
    }else{
      $('#header-nav').hide();
      $('.nav-item a').css('color','#000');
    }
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
  
  // $('#burger-btn').click(function(){
  //   $('#burger-btn .bar').css('background-color','#000');
  // });
  /*********************** headerの色変化 ******************* */
  $(window).on('load scroll resize',function(){
    if($('.header').length){
      if ($(this).scrollTop() < 1 ) {
        $('#header').css('background','none');
        $('.header-logo p,.nav-item a').css('color','#fff');
        $('.img1').addClass('logo-active');
        $('.img2').removeClass('logo-active');
        $('#burger-btn .bar').css('background-color','#fff');
      } else {
        $('#header').css('background','rgba(255, 255, 255, 1)');
        $('.header-logo p,.nav-item a').css('color','black');
        $('.img2').addClass('logo-active');
        $('.img1').removeClass('logo-active');
        $('#burger-btn .bar').css('background-color','black');
      }
    }
  });
  /*******************        end of header        *******************/

  /***************** modal モーダル **********************/
  // ウィンドウを開く
  $('.reserv').on('click', function() {
    $('.modal').fadeIn( 300 );
      return false;
    });

  // ウィンドウを閉じる
  $( '.modal-close' ).on( 'click', function() {
    $( '.modal' ).fadeOut( 300 );
      return false;
  });
  /*********************************************************/

  /*****************       タブ       **********************/
  $('.tab').click(function(){
    // クリックした要素の先祖要素の中で、classの値がgroupの要素を取得
    const group = $(this).parents('.group'); 
    group.find('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    group.find('.is-show').removeClass('is-show');
    // クリックしたタブからインデックス番号を取得
    var index = $(this).index();
    // クリックしたタブと同じインデックス番号をもつコンテンツを表示
    group.find(".panel").eq(index).addClass('is-show');
    });
  /*********************************************************/




  AOS.init({
    duration: 1000
  });

  const config = {
    mode: "range",
    minDate: "today",
    dateFormat: "Y-m-d",
  }
  flatpickr('.modal-date', config);
});
  