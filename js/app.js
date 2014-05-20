// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();

$(document).ready(function() {
  if ($(document).width() > 735) { //Ensure navigation links are at the right height if the screen is large enough.
    $(".nav-link").css("top", $(".nav-link").parent().height()/4);  
  }

  $("#contact-form button[type='submit']").on("click", function(evt) {
    evt.preventDefault();

    if (!($("#form-name").val().length > 0 && $("#form-email").val().length > 0 && $("#form-project").val().length > 0)) {
      $("#contact-form .sent").hide();
      $("#contact-form .error").fadeIn();
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
      $("#contact-form .error").hide();
      $("#contact-form .sent").fadeIn();

    });
  });
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