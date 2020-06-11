/* adjust path as needed */
(function ($) {
  $(document).ready(function () {
    //sticky navbar when  scroll to navbar positon
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

    const $dropdownMenuButton = $("#dropdownMenuButton");
    $(".dropdown-menu").on("click", "a", function () {
      $dropdownMenuButton.text($(this).text());
      $dropdownMenuButton.val($(this).text());
    });
    // $(".dropdown-menu a").click(function () {
    //   $("#dropdownMenuButton").text($(this).text());
    //   $("#dropdownMenuButton").val($(this).text());

    //   // $(".btn:first-child").text($(this).text());
    //   // $(".btn:first-child").val($(this).text());
    // });
  });
})(jQuery);
