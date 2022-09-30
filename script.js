// Menu side toggle
$('document').ready(function () {
    $('button.navbar-toggle').click(function () {
        var navbar_obj = $($(this).data("target"));
        navbar_obj.toggleClass("open");
    });
});

// Highlights current page
jQuery(function($) {
    var path = window.location.href;
    $('ul li a').each(function() {
     if (this.href === path) {
      $(this).parent().addClass('active');
     }
    });
   });