/* adjust path as needed */
(function ($) {
  $(document).ready(function () {
    //sticky navbar when  scroll to navbar positon
    const $navbar = $(".navbar");
    const origOffsetY = $navbar.offset().top;
    function scroll() {
      if ($(window).scrollTop() >= origOffsetY) {
        console.log(origOffsetY);
        $navbar.addClass("fixed-top").css("top", 0);
      } else {
        $(window).width() >= 1140
          ? $navbar.css("top", "38px")
          : $navbar.css("top", "70px");
      }
    }
    document.onscroll = scroll;

    const $dropdownMenuButton = $("#dropdownMenuButton");
    $(".dropdown-menu").on("click", "a", function () {
      $dropdownMenuButton.text($(this).text());
      $dropdownMenuButton.val($(this).text());
    });
    $("#accordionQA").on(
      "hide.bs.collapse show.bs.collapse",
      ".panel-collapse",
      function (e) {
        let $this = $(this);
        $this.prev().find(".ico-expandable").toggleClass("ico-expanded");
      }
    );

    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        $("#toTopBtn").fadeIn();
      } else {
        $("#toTopBtn").fadeOut();
      }
    });

    $("#toTopBtn").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
      return false;
    });
  });
})(jQuery);
