$(document).ready(function () {
  var cnt = 0; //시도 횟수
  var win = 0; //승리 횟수
  var winPer = 0; // 승리 확률
  $("p>img").click(function () {
    // 선택한 카드 표시
    var user = $(this).attr("id");
    user = parseInt(user.charAt(1));
    var str = $(this).attr("src");
    str = str.replace("./img/", "");
    str = str.replace(".png", "");
    $("#img1").attr("src", "./img/" + str + ".png");

    // 랜덤 카드 표시
    var ran = Math.floor(Math.random() * 3) + 1;
    var nstr = "";
    switch (ran) {
      case 1:
        nstr = "scissorscom";
        break;
      case 2:
        nstr = "rockcom";
        break;
      case 3:
        nstr = "papercom";
        break;
    }
    $("#img2").attr("src", "./img/" + nstr + ".png");

    //승부를 보자!
    cnt++;
    if (user == ran) {
      winPer = ((win / cnt) * 100).toFixed(2);
      $("#msg").html(
        "비겼습니다.<br>전체 횟수 " +
          cnt +
          ", 이긴 횟수 " +
          win +
          "[ " +
          winPer +
          "% ]"
      );
    } else if (user - ran == -2 || user - ran == 1) {
      win++;
      winPer = ((win / cnt) * 100).toFixed(2);
      $("#msg").html(
        "이겼습니다.<br>전체 횟수 " +
          cnt +
          ", 이긴 횟수 " +
          win +
          "[ " +
          winPer +
          "% ]"
      );
    } else {
      winPer = ((win / cnt) * 100).toFixed(2);
      $("#msg").html(
        "졌습니다.<br>전체 횟수 " +
          cnt +
          ", 이긴 횟수 " +
          win +
          "[ " +
          winPer +
          "% ]"
      );
    }
  });
  $("input[type=button]").click(function () {
    $("#img1").attr("src", "./img/q.png");
    $("#img2").attr("src", "./img/q.png");
    $("#msg").html("");
    cnt = 0;
    win = 0;
  });
});
