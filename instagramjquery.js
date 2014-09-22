$(document).ready(function() {
  $(".hello").slideUp().show("slow");
  $(".hello").slideDown().show("slow");
  $("#first").css({opacity: 0.6}).show("slow");
  $("#third").append("(Hover over images)");
  $("#second").fadeOut({ opacity: 0.6}).show("slow");
  $("#second").fadeIn({ opacity: 0.6}).show("slow");
  $("#photos").find("span").hide();
  $("#third").slideUp().show("slow");
  $("#third").slideDown().show("slow");
  $("body").css({ 'background-image':'url(Images/background.jpg)'}).show("slow");
  $("#photos").on("mouseenter", "li", function() {
    $(this).find("span").slideToggle();
  }).on("mouseleave", "li", function() {
    $(this).find("span").slideToggle();
  });
});