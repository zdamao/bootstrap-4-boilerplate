(function ($) {
  $(document).ready(function () {
    const $navbar = $(".navbar");
    const origOffsetY = $navbar.offset().top;
    function scroll() {
      if ($(window).scrollTop() >= origOffsetY) {
        $navbar.addClass("fixed-top");
      } else {
        $navbar.removeClass("fixed-top");
      }
    }
    document.onscroll = scroll;
  });
})(jQuery);
