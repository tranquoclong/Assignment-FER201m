$("#pauseButton").click(function () {
  document.getElementsByClassName("fa-pause").length == 0
    ? $("#homeCarousel").carousel("cycle")
    : $("#homeCarousel").carousel("pause");
});
$("#carouselButtons").click(function () {
  $(this).find("i").toggleClass("fa fa-pause").toggleClass("fa fa-play");
});
