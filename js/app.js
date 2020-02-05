$(function () {

    // フロートヘッダーメニュー
    var targetHeight = $('.js-float-menu-target').height();
    $(window).on('scroll', function() {
      $('.js-float-menu').toggleClass('float-active', $(this).scrollTop() > targetHeight);
    });

    // SPメニュー
    $('.js-toggle-sp-menu').on('click', function () {
      $(this).toggleClass('active');
      $('.js-toggle-sp-menu-target').toggleClass('active');
    });

    //spメニュー close
    $('.js-toggle-sp-menu-target').on('click', function () {
      $(this).toggleClass('active');
      $('.js-toggle-sp-menu').toggleClass('active');
    });
  

 //modal window
$('.js-modal-open1').on('click',function(){
  //画像を先頭のものにする
  var dataUrl = $(".sub1").attr('src');
  $(".c-works-pic__main").attr('src',dataUrl);
  //背景固定
  scrollPosition = $(window).scrollTop();
  $('.body').addClass('fixed').css({'top': -scrollPosition});
  //フェードイン
  $('.js-modal1').fadeIn();
  return false;
});
$('.js-modal-open2').on('click',function(){
  var dataUrl = $(".sub2").attr('src');
  $(".c-works-pic__main").attr('src',dataUrl);
  scrollPosition = $(window).scrollTop();
  $('.body').addClass('fixed').css({'top': -scrollPosition});
  $('.js-modal2').fadeIn();
  return false;
});
$('.js-modal-open3').on('click',function(){
  var dataUrl = $(".sub3").attr('src');
  $(".c-works-pic__main").attr('src',dataUrl);
  scrollPosition = $(window).scrollTop();
  $('.body').addClass('fixed').css({'top': -scrollPosition});
  $('.js-modal3').fadeIn();
  return false;
});
$('.js-modal-open4').on('click',function(){
  var dataUrl = $(".sub4").attr('src');
  $(".c-works-pic__main").attr('src',dataUrl);
  scrollPosition = $(window).scrollTop();
  $('.body').addClass('fixed').css({'top': -scrollPosition});
  $('.js-modal4').fadeIn();
  return false;
});
$('.js-modal-open5').on('click',function(){
  var dataUrl = $(".sub5").attr('src');
  $(".c-works-pic__main").attr('src',dataUrl);
  scrollPosition = $(window).scrollTop();
  $('.body').addClass('fixed').css({'top': -scrollPosition});
  $('#footer').toggleClass('non');
  $('.js-modal5').fadeIn();
  return false;
});

//modal close
$('.js-modal-close').on('click',function(){
  //背景固定解除
  $('.body').removeClass('fixed').css({'top': 0});
  //現在地戻す
  window.scrollTo( 0 , scrollPosition );
  $('.js-modal').fadeOut();
  return false;
});
$('.js-modal-close5').on('click',function(){
  //最後の画像だけ
  $('.body').removeClass('fixed').css({'top': 0});
  window.scrollTo( 0 , scrollPosition );
  //フッターに突き刺さらないように
  $('#footer').toggleClass('non');
  $('.js-modal').fadeOut();
  return false;
});

//画像切り替え
$(".c-works-pic__sub").on('mouseover touchend',function(){
  var dataUrl = $(this).attr('src');
  $(".c-works-pic__main").attr('src',dataUrl);
});
});