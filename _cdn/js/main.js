$(function () {
//DESLIZA O MENU
    $('.main_header_menu ul li a').click(function () {
        var goto = $('.' + $(this).attr('href').replace('#', '')).position().top;
        $('html, body').animate({scrollTop: goto - $('.main_header').outerHeight()}, 1000);
        return false;
    });

    $('.banner').unslider({
        autoplay: true,
        delay: 10000,
        dots: false,
        arrows: false
    });


    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });

//    $('.main_artigos_article > article').hover(function () {
//        $('.main_artigos_article > article .main_artigos_info').css('display', 'block')},
//    function(){
//        $('.main_artigos_article > article .main_artigos_info').css('display', 'none')
//    });



    // EFEITOS DE SCROLL
    window.sr = ScrollReveal();
    sr.reveal('.srBottom', {origin: 'bottom', distance: '200px', duration: 1500, delay: 1});
    sr.reveal('.srTop', {origin: 'top', distance: '200px', duration: 1500});
    sr.reveal('.srLeft', {origin: 'left', distance: '200px', duration: 1500, delay: 1});
    sr.reveal('.srRight', {origin: 'right', distance: '200px', duration: 1500, delay: 1});
    sr.reveal('.boxs', {duration: 2000});
});

$(window).scroll(function () {
    if ($(this).scrollTop() > $('.main_header').outerHeight() + 150) {
        $('.main_header_logo > a > img').fadeIn(1000).attr("src", "http://localhost/sobes/wp-content/themes/sobes/img/logo-sobes.png");
        $('.main_header').addClass('main_header_fixed');
        $('.main_header_fixed').fadeIn(1000).css('display', 'block');
        $('.main_header_menu_button').fadeIn(1000).css('background-color', '#fff');
        $('.main_header_menu ul li a').fadeIn(1000).css('color', '#476351');
        $('.main_header_menu_button > i').fadeIn(1000).css('color', '#476351');
        $('.main_header_menu_button > p').fadeIn(1000).css('color', '#476351');
    } else {
        $('.main_header').removeClass('main_header_fixed');
        $('.main_header_logo > a > img').fadeIn(1000).attr("src", "http://localhost/sobes/wp-content/themes/sobes/img/logo-sobes-white.png");
        $('.main_header_menu ul li a').fadeIn(1000).css('color', '#fff');
        $('.main_header_menu_button').fadeIn(1000).css('background-color', '#30C400');
        $('.main_header_menu_button > i').fadeIn(1000).css('color', '#fff');
        $('.main_header_menu_button > p').fadeIn(1000).css('color', '#fff');
    }
});

$('.menu_mobile').click(function () {
    $('.main_header_menu_box').css('display', 'block');
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $(".menu_mobile > i").attr("class", "fas fa-times" );
        $(".menu_mobile > p").html("Fechar");
        $('.main_menu_box').animate({'right': '0px'}, 500);
        $('.main_header_menu_box ul li a').click(function () {
            $(".menu_mobile > .material-icons").html("menu");
            $('.main_header_menu_box').animate({'right': '-100%'}, 500);
            $('.menu_mobile').removeClass('active');
        });
    } else {
        $(this).removeClass('active');
        $(".menu_mobile > i").attr("class", "fas fa-bars" );
        $(".menu_mobile > p").html("Menu");
        $('.main_menu_box').animate({'right': '-100%'}, 500);
    }
});


//$('.menu_mobile').click(function () {
//    $('nav.main_header_menu').css('display', 'block');
//    if (!$(this).hasClass('active')) {
//        $(this).addClass('active');
//        $(".menu_mobile > .material-icons").html("close");
//        $('nav.main_header_menu').animate({'right': '0px'}, 1000);
//        $('nav.main_header_menu ul li a').click(function () {
//            $(".menu_mobile > .material-icons").html("menu");
//            $('nav.main_header_menu').animate({'right': '-100%'}, 1000);
//            $('.menu_mobile').removeClass('active');
//        });
//    } else {
//        $(this).removeClass('active');
//        $(".menu_mobile > .material-icons").html("menu");
//        $('nav.main_header_menu').animate({'right': '-100%'}, 1000);
//    }
//});


$(document).ready(function () {
    //FORM SUBMIT
    $('.j_form').submit(function () {
        var dados = $(this).serialize();

        $.ajax({
            url: '../sendEmail.php',
            data: dados,
            type: 'POST',
            dataType: 'HTML',
            beforeSend: function () {
                $('.form_load').fadeIn();
            },
            sucess: function (data) {
                $('.form_load').fadeOut();
            },
            complete: function () { /* completo */
                $('.form_load').fadeOut(); //wow!
//                $('.bg-black').fadeOut(); //wow!
                $('.j_form_message').fadeIn(300).delay(4000).fadeOut(400);

            }
        });
        return false;
    });
});
