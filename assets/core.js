$(document).ready(function () {
  $(".menu-section span").on("click", function () {
    if ($(this).hasClass("active")) return;

    let section = $(this).data("section");
    $(".menu-section span").removeClass("active");
    $(this).addClass("active");
    switch (section) {
      case "all":
        $(".news-box").show();
        break;
      default:
        $(".news-box:visible").fadeOut(1000, function () {
          $(".news-box[data-section='" + section + "']").show();
        });
        break;
    }
  });
});
