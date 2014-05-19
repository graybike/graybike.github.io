// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();

$(document).ready(function() {
  if ($(document).width() > 735) { //Ensure navigation links are at the right height if the screen is large enough.
    $(".nav-link").css("top", $(".nav-link").parent().height()/4);  
  }
});

Foundation.utils.image_loaded($('.project-img img'), function(){
  resizeImageOverlay();
});

function resizeImageOverlay() {
  $(".project-img").each(function() {
    $(this).wrapInner("<div class='image'></div>")
    $(this).children('.image').prepend("<div class='caption'><span>VIEW FULL SIZE</span></div>");
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