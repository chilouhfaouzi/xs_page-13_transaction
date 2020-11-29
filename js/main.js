$(".nav_time > div").click(function () {
  $(".list_persone ." + $(this).attr("data-class"))
    .addClass("show")
    .siblings()
    .removeClass("show");

  $(".nav_time > div").removeClass("active");
  $(this).addClass("active");
});
