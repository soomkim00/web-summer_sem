$(document).ready(function () {
  $("#bt1").click(function () {
    for (var i = 1; i <= 14; i++) {
      var ran = Math.floor(Math.random() * 99) + 1;
      $("#c" + i).text(ran);
      $("#c" + i).css({ "background-color": "white", color: "black" });
    }
  });
  $("#bt2").click(function () {
    for (var i = 1; i <= 14; i++) {
      $("#c" + i).text("");
      $("#c" + i).css("background-color", "white");
    }
  });
  $(".card").click(function () {
    var num = $(this).text();
    if (num % 2 == 0) $(this).css("background-color", "red");
    else $(this).css("background-color", "blue");
    $(this).css("color", "white");
  });
});
