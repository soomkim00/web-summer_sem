function init() {
  var newDate = new Date();
  $("#txtYear").val(newDate.getFullYear());
  var mon = newDate.getMonth() + 1;
  if (mon < 10) mon = "0" + mon;
  $("#selMon").val(mon);
  var day = newDate.getDate() - 1;
  if (day < 10) day = "0" + day;
  $("#selDay").val(day);
}

$(document).ready(function () {
  init();
  $("#bt1").click(function () {
    $("#msg").text("");
    var url =
      "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
    url = url + $("#txtYear").val() + $("#selMon").val() + $("#selDay").val();
    $.ajax({
      url: url,
      type: "GET",
      dataType: "xml",
      success: function (data) {
        if ($(data).find("dailyBoxOffice").text() == "") {
          alert("자료가 없습니다");
          return;
        }
        //반복(순위, 증감, 영화이름)
        var str = "";
        $(data)
          .find("dailyBoxOffice")
          .each(function () {
            str = str + $(this).find("rank").text() + "위 (";
            var inten = parseInt($(this).find("rankInten").text());
            if (inten > 0) {
              inten = "▲" + inten;
            } else if (inten < 0) {
              inten = "▼" + Math.abs(inten);
            }
            str = str + inten + ") : ";
            str = str + $(this).find("movieNm").text() + "<br>";
          });
        $("#msg").html(str);
      },
      error: function () {
        alert("오류입니다.");
      },
    });
  });
});
