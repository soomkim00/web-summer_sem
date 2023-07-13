$(document).ready(function () {
  var cnt = 0; //시도 횟수
  var anCnt = 0; //정답 횟수
  $("p>img").click(function () {
    // 선택한 주사위 표시
    var nsrc = $(this).attr("src");
    nsrc = nsrc.replace("./img/", "");
    var n = parseInt(nsrc.charAt(0));
    $("#img1").attr("src", "./img/" + n + ".png");
    // 랜덤 주사위 생성
    var ran = Math.floor(Math.random() * 6) + 1;
    $("#img2").attr("src", "./img/c" + ran + ".png");
    // 두개 주사위 비교 및 결과표시
    cnt++;
    if (n == ran) {
      anCnt++;
      $("#msg").html(
        "맞췄습니다.<br>전체 횟수 " + cnt + ", 맞춘 횟수 " + anCnt
      );
    } else {
      $("#msg").html(
        "틀렸습니다.<br>전체 횟수 " + cnt + ", 맞춘 횟수 " + anCnt
      );
    }
  });
  $("input[type=button]").click(function () {
    $("#img1").attr("src", "./img/q.png");
    $("#img2").attr("src", "./img/q.png");
    $("#msg").html("");
    cnt = 0;
    anCnt = 0;
  });
});
