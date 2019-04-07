/*global $, alert, console*/

$("document").ready(function () {
    "use strict";
    var header = $('.header');
    header.height($(window).height());
    $(window).resize(function () {
        header.height($(window).height());
        $('.bxslider').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });
        
    });
    
    // links add active class
    
    $('.links li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // adjust bxslider list item centre
    $('.bxslider').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });
    
    // trigger the slider
    
    $('.bxslider').bxSlider({
        pager: false
    });
    
    // smoth scroll to div
    
    $('.links li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 2000);
    });
    
    // our auto slider code
    
    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(2000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn(3000);
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn(2000);
                    autoSlider();
                });
            }
        });
    }());
    
 // trigger nice scroll
    $("html").niceScroll({
        cursorcolor: '#eda608',
        cursorwidth: '7px',
        cursorborder: '#232323'
    });
});