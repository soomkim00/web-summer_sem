$(document).ready(function () {
  $("#sel1").change(function () {
    var selVal = $(this).val();
    var url = "";
    switch (selVal) {
      case "google":
        url = "http://www.google.com";
        break;
      case "naver":
        url = "http://www.naver.com";
        break;
      case "daum":
        url = "http://www.daum.net";
        break;
    }
    $("#img1").attr("src", "./img/" + selVal + ".png");
    // $("#p1").text(url);
    $("#a1").attr("href", url);
    $("#p1").html('<a href="' + url + '" target="blank">' + url +  '</a>');
  });
});
