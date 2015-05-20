// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree
//= require circles


$(document).ready(function() {
  var navpos = $('.topper').offset();
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > navpos.top) {
        $('.topper').css('position','fixed');
        $('.topper').css('top','0');
        $('#menu-placeholder').css('height','75');
       }
       else {
         $('.topper').css('position','');
         $('.topper').css('top','');
         $('#menu-placeholder').css('height','');
       }
    });

  var colors = ["2AD0B8", "3C49E1","87F6FF","FFBFA0",
      "DAF5FF","4CB963","928CE9","676675","A44464",
      "89DDFF","40FD65","EE8434","C95D63","AE8799",
      "717EC3","496DDB"];

  $('.port-block').on({
    mouseenter: function () {
      current = $(this).find("img");
      parent = $(current).parent();
      background = colors[Math.floor(Math.random()*colors.length)];
      converted = parseInt(background, 16);
      if (converted > parseInt("FFFFFF",16)/2) {
        $(this).find('.image-header').css("color","#000000");
        $(this).find('.image-text').css("color","#000000");
      } else {
        $(this).find('.image-header').css("color","#FFFFFF");
        $(this).find('.image-text').css("color","#FFFFFF");
      }
      $(this).find('.image-header').css("display","block");
      $(this).find('.image-text').css("display","block");
      $(this).find('.first-button').css("display","block");
      $(this).find('.second-button').css("display","block");
      $(parent).css("background-color","#"+background);
      $(current).css("opacity","0.1");
    },
    mouseleave: function () {
      current = $(this).find("img");
      parent = $(current).parent();
      $(parent).css("background-color","#333333");
      $(current).css("opacity","1");
      $(this).find('.image-header').css("display","none");
      $(this).find('.image-text').css("display","none");
      $(this).find('.first-button').css("display","none");
      $(this).find('.second-button').css("display","none");
    }
  });
});
