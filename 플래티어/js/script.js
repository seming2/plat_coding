$(function(){


$(window).scroll(function(){
  let wH = $(window).scrollTop();
  let headerF = $('.header_wrap');
  console.log(wH);
  if( wH > 0){
    headerF.addClass('on');
    // headerF.css({position:'fixed'})
  }else{
    headerF.removeClass('on')
  }
})




    $('header').mouseover(function(){
        $('header').addClass('on')
        // $(this).parent('.header_wrap').addClass('on')
        $(this).find('.logo').addClass('on')
        $(this).find('.lang').addClass('on')
        $(this).find('.text_box').addClass('on')


        $(this).find('.lnb').css({display:'flex'})

    })




    $('header').mouseout(function(){
        $('header').removeClass('on')
        $(this).find('.logo').removeClass('on')
        $(this).find('.lang').removeClass('on')
        $(this).find('.text_box').removeClass('on')
        $(this).find('.lnb').css({display:'none'})
    })

    let liH = $('.lnb').height();
    
    $('.lnb_wrap .lnb li').mouseover(function(){
      $(this).addClass('on');
    })
    $('.lnb_wrap .lnb li').mouseleave(function(){
      $(this).removeClass('on');
    })


  
    let comPanyLnb = $('.lnb_wrap li a');
    let pageUrl = window.location.href
    $(comPanyLnb).each(function(){
      let lnbHref = $(this).attr('href');
        if(pageUrl.indexOf(lnbHref) > 0 ){
            $(this).css({color:'#00acee'});
            $(this).parent().addClass('active')
            
        }
       
    })

    $('.lnb').each(function(){
      if( liH == 274){
        $('.lnb').css({height:274})
      }
  
    })


    let hisToryBtn = $('.contents_box li .ch1 .more');
    let hisToryText = $('.history .history_wrap .contents_box .ch2');
    let hisToryBtnUp = $('.contents_box li .ch2 .more');

    hisToryBtn.click(function(){
      hisToryText.show();
      console.log(hisToryText)
    })

    hisToryBtnUp.click(function(){
      hisToryText.hide();
      console.log(hisToryText)
    })




let platformBtn = $('.cm_platform .flatform_gnb li');

   platformBtn.click(function(){
    $(this).addClass('active').siblings().removeClass('active')

    let formBox = $(this).parents('.flatform_gnb');

    let showBox =  formBox.siblings('.con_none')

    // formBox.siblings('.con_none').show();
    

    return false;
   })


   
$('.flatform_gnb li a').click(function(){

    let linkUrl = $(this).attr('href');
    $('.con_none').hide()
    $('.con_none.'+linkUrl).fadeIn();
    $(this).parent('li').addClass('active').siblings().removeClass('active');
    console.log(linkUrl);

    return false;
})






var bullet = ['1번', '2번', '3번'];
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});






})