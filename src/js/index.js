/* adjust path as needed */
(function ($) {
  $(document).ready(function () {
    //sticky navbar when  scroll to navbar positon
    const $navbar = $(".navbar");
    const origOffsetY = $navbar.offset().top;
    function scroll() {
      if ($(window).scrollTop() >= origOffsetY) {
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
    // $(".dropdown-menu a").click(function () {
    //   $("#dropdownMenuButton").text($(this).text());
    //   $("#dropdownMenuButton").val($(this).text());

    //   // $(".btn:first-child").text($(this).text());
    //   // $(".btn:first-child").val($(this).text());
    // });
  });

  $("#accordionQA").on(
    "hide.bs.collapse show.bs.collapse",
    ".panel-collapse",
    function (e) {
      let $this = $(this);
      $this.prev().find(".ico-expandable").toggleClass("ico-expanded");
    }
  );
  // Add minus icon for collapse element which is open by default
  // $(".collapse.in").each(function () {
  //   $(this).siblings(".panel-heading").find(".glyphicon").addClass("rotate");
  // });
  // // Toggle plus minus icon on show hide of collapse element
  // $(".collapse")
  //   .on("show.bs.collapse", function () {
  //     $(this).parent().find(".glyphicon").addClass("rotate");
  //   })
  //   .on("hide.bs.collapse", function () {
  //     $(this).parent().find(".glyphicon").removeClass("rotate");
  //   });
})(jQuery);
