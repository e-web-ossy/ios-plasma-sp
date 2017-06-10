$(document).ready(function () {
  imgSize();
});
$(window).resize(function () {
  imgSize();
});

function imgSize() {
  hsize = $('.back-img2').height();
  $('.inner').css("height", hsize + "px");
  hsize = $('.back-img3').height();
  $('#sec_3').css("height", hsize + "px");
}
