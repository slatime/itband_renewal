$(function () {
   let menuId = $('.container').data('menu')

   $('nav ul li').each(function (index, item) {
      let hrefName = $(item).children('a').attr('id')
      $(item).removeClass('on')
      if (menuId == hrefName) $(item).addClass('on')
   })

   // 햄버거 메뉴 이벤트
   $('.menu_top > li a').hover(function (event) {
      if (
         event.type == 'mouseenter' &&
         $(this).closest('ul').hasClass('sub_menu') == false
      ) {
         $(this).parent('li').addClass('on')

         if ($(this).text() == 'People') {
            $('.sub_menu').show()
         } else {
            $('.sub_menu').hide()
         }
      } else {
         $(this).parent('li').removeClass('on')
      }
   })

   $('.pr_content .filter li a.select').click(function () {
      if ($('.pr_content .filter li a.select').hasClass('on')) {
         $(this).removeClass('on')
         $(this).next('ul.portfolio_lnb').removeClass('on')
      } else {
         $(this).addClass('on')
         $(this).next('ul.portfolio_lnb').addClass('on')
      }
      return false
   })
   //============ 프로젝트 슬라이드
   $('.portfolio_list').click(function () {
      var id = $(this).attr('id');
      if ($('.pop_warp'.concat(id)).hasClass('on')) {
         $('header'.concat(id)).removeClass('on')
         $('.pop_warp_bg'.concat(id)).removeClass('on')
         $('.pop_warp'.concat(id)).removeClass('on')
         $('body').css({overflow: 'visible', height: '100%'})
      } else {
         $('header'.concat(id)).addClass('on')
         $('.pop_warp_bg'.concat(id)).addClass('on')
         $('.pop_warp'.concat(id)).addClass('on')
         $('body').css({overflow: 'hidden', height: '100vh'})
      }
      return false
   })

   // //============상세-어바웃 메뉴
   // $(window).scroll(function () {
   //    var height = $(document).scrollTop() //실시간으로 스크롤의 높이를 측정
   //    if (height > 960) {
   //       $('.about_menu').addClass('fixed')
   //    } else if (height == 0) {
   //       $('.about_menu').removeClass('fixed')
   //    }
   // })
   // $(window).scroll(function () {
   //    var ht = $(window).height()
   //    var t = $(window).scrollTop()
   //    for (var i = 0; i < 5; i++) {
   //       if (t >= i * ht && t < ht * (i + 1)) {
   //          $('.about_menu_inner > li').removeClass('on')
   //          $('.about_menu_inner > li').eq(i).addClass('on')
   //       }
   //    }
   // })

   // // ============서브메뉴 $(function(){ $("header nav ul
   // // li").eq(2).mouseenter(function(){
   // // $(".sub_nav_bg").stop().css({'height':'120px', 'opacity':'1'}); }); $("header
   // // nav ul li").eq(2).mouseleave(function(){
   // // $(".sub_nav_bg").stop().css({'height':'0', 'opacity':'0'}); }); });
   // $(function () {
   //    $('.subMenuParent').hover(function (event) {
   //       if (event.type == 'mouseenter') {
   //          $('.sub_nav_bg').show()
   //       } else {
   //          $('.sub_nav_bg').mouseleave(function () {
   //             $(this).hide()
   //          })
   //       }
   //    })
   // })

   // ============상세-어바웃-비전
   // $(window).scroll(function () {
   //    var height = $(document).scrollTop() //실시간으로 스크롤의 높이를 측정
   //    if (height > 1920) {
   //       $('.con04_bg').addClass('move')
   //    } else if (height !== 2880) {
   //       $('.con04_bg').removeClass('move')
   //    }
   // })

   //============헤더 스크롤
   $(function () {
      // Hide Header on on scroll down
      var didScroll
      var lastScrollTop = 0
      var delta = 4
      var navbarHeight = $('header').outerHeight()
      $(window).scroll(function (event) {
         didScroll = true
      })
      setInterval(function () {
         if (didScroll) {
            hasScrolled()
            didScroll = false
         }
      }, 250)

      function hasScrolled() {
         var st = $(this).scrollTop()
         // Make sure they scroll more than delta
         if (Math.abs(lastScrollTop - st) <= delta) return

         // If they scrolled down and are past the navbar, add class .nav-up. This is
         // necessary so you never see what is "behind" the navbar.
         if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').addClass('color_on')
         } else {
            // Scroll Up
            if (st == 0) {
               $('header').removeClass('color_on')
            }
         }
         lastScrollTop = st
      }
   })

   $('.menu_bg').click(function () {
      menuTrigger()
   })
   AOS.init({
      duration: 1000,
   })
   inputOnly()

   //============어바웃 섹션이동
   $('.scroll_move').click(function (event) {
      event.preventDefault()
      $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500)
   })
   //============스크롤 페이지(about, people)
   var ht = $(window).height()
   $('.container.scroll > section').height(ht)
   $(window).resize(function () {
      var ht = $(window).height()
      $('.container.scroll > section').height(ht)
      location.reload()
   })
   $('.container.scroll > section').on('mousewheel', function (event, delta) {
      console.log(delta);
      if (delta > 0) {
         var prev = $(this).prev().offset().top;
         console.log('prev :' + prev);
         $('html, body').stop().animate(
            {
               scrollTop: prev,
            },
            1000
            );
            return false;
      } else if (delta < 0) {
         var next = $(this).next().offset().top;
         $('html, body').stop().animate(
            {
               scrollTop: next,
            },
            1000
            );
            return false;
      }
   })
   $(window).scroll(function () {
      var ht = $(window).height()
      var t = $(window).scrollTop()
      for (var i = 0; i < 4; i++) {
         if (t >= i * ht && t < ht * (i + 1)) {
            $('#right_nav li a').removeClass('active')
            $('#right_nav li a').eq(i).addClass('active')
            console.log('i :' + i)
            if (i == 0) {
               $('.scroll_icon').css({
                  opacity: '1',
               })
               $('.con04_bg').removeClass('move')
            } else if (i == 1) {
               $('.scroll_icon').css({
                  opacity: '0',
               })
               $('.con04_bg').removeClass('move')
            } else if (i == 2) {
               $('.scroll_icon').css({
                  opacity: '0',
               })
               $('.con04_bg').addClass('move')
            } else if (i == 3) {
               $('.scroll_icon').css({
                  opacity: '0',
               })
               $('.con04_bg').removeClass('move')
            }
         }
      }
   })
})

function inputOnly() {
   var e = $('.contact_inpt li input')
   $(e).val('')
   $(e).focusout(function () {
      if ($(this).val() != '') {
         $(this).addClass('on')
      } else {
         $(this).removeClass('on')
      }
   })
}

function menuTrigger() {
   var state = $('.main_menu').hasClass('on')
   if (state) {
      // todo open 일때
      $('.main_menu').removeClass('on')
      $('header').removeClass('type02')
      $('.menu_open, .btn_close, .menu_bg').css({
         display: 'none',
      })
      $('.btn_open').css({
         display: 'block',
      })
      $('.btn_close').css({
         display: 'none'
      })
      $('html, body').css({
         overflow: 'visible',
         height: '100%',
      })
   } else {
      $('.main_menu').addClass('on')
      $('header').removeClass('color_on')
      $('header').addClass('type02')
      $('.menu_open, .menu_bg').css({
         display: 'block',
      })
      $('.btn_open').css({
         display: 'none',
      })
      $('.btn_close').css({
         display: 'block'
      })
      $('html, body').css({
         overflow: 'hidden',
         height: '100%',
      })
   }
}

function changeMode() {
   value = $('#mode').val()
   if (value == 'dark') value = 'light'
   else value = 'dark'
   var date = new Date()
   date.setTime(date.getTime() + 24 * 60 * 60 * 1000)
   document.cookie =
      'mode' + '=' + value + ';expires=' + date.toUTCString() + ';path=/'
   window.location.reload()
}
