// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(function() { // Smooth Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});

$(document).ready(function() {
  if ($(window).width() > 735) { //Ensure navigation links are at the right height if the screen is large enough.
    $(".nav-link").css("top", $(".nav-link").parent().height()/4);  
  }

  //Setup the quotes slider
  $('.quotes-slider').slick({
    // arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $("#contact-form button[type='submit']").on("click", function(evt) {
    evt.preventDefault();

    if (!($("#form-name").val().length > 0 && $("#form-email").val().length > 0 && $("#form-project").val().length > 0)) {
      $("#sent").hide();
      $("#error").fadeIn();
      return;
    }

    $.ajax({
      dataType: 'jsonp',
      url: "http://getsimpleform.com/messages/ajax?form_api_token=3983cc7d7269fc99bce6b5c0e0456326",
      data: {
        name: $("#form-name").val(),
        email: $("#form-email").val(),
        budget: $("#form-budget").val(),
        project: $("#form-project").val(),
      }
    }).done(function() {
      //callback which can be used to show a thank you message
      //and reset the form
      $("#error").hide();
      $("#contact-form").fadeOut(400, function() {
        $("#sent").fadeIn();
      })
      

    });
  });
});

$(window).resize(function() {
  if ($(window).width() > 735) { //Ensure navigation links are at the right height if the screen is large enough.
    $(".nav-link").css("top", $(".nav-link").parent().height()/4);  
  } else {
    $(".nav-link").css("top", 0);  
  }
});

Foundation.utils.image_loaded($('.work img'), function(){
  resizeImageOverlay();
});

function resizeImageOverlay() {
  $(".work img").each(function() {
    var img_src = $(this).attr("src");
    $(this).wrap("<a href=" + img_src + " target='_blank' class='text-center'><div class='image'></div></a>")
    $(this).closest('.image').prepend("<div class='caption'><span>VIEW FULL SIZE</span></div>");
  });
  $(".caption span").each(function() {
    var this_height = $(this).height();
    var parent_height = $(this).parent().height();
    $(this).css("top", (parent_height / 2) - (this_height /2));
  });
}

$(window).resize(function() {
  resizeImageOverlay();
});