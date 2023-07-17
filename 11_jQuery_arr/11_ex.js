// 전역변수 선언
var arr;
var sum;
var count;

// 초기화 함수
function init() {
  $(".box3").text("");
  $("#msg").text("");
  sum = 0;
  count = 0;
}

// 카드에 배열 값 입력
function createDiv() {
  var htmlStr = "";
  var cnt = 0;
  for (var i = 0; i < arr.length; i++) {
    htmlStr = htmlStr + "<div class='card'>" + arr[i] + "</div>";
    cnt++;
    if (cnt % 5 == 0) {
      htmlStr = htmlStr + "<div class='cardClear'></div>";
    }
  }
  $(".box3").html(htmlStr);
}

// 숫자 입력값으로 카드만들기
function createRandom() {
  // 3 이하 수 확인
  if (parseInt($("#txt1").val()) < 3) {
    alert("카드 개수는 3이상으로 입력해야 합니다.");
    $("#txt1").val("");
    $("#txt1").focus();
    return;
  }
  // 배열 생성
  var n = parseInt($("#txt1").val());
  arr = new Array(n);
  // 배열에 랜럼 수 배정
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  // 배열 안의 수 카드로 변환
  createDiv();
}

// 숫자 목록으로 카드 만들기
function createSplit() {
  arr = $("#txt1").val().split(",");
  if (arr.length < 3) {
    alert("카드 개수는 3이상으로 입력해야 합니다.");
    $("#txt1").val("");
    $("#txt1").focus();
  }
  createDiv();
}

//메인
$(document).ready(function () {
  init();
  // 카드 보기 클릭 시
  $("#bt1").click(function () {
    // 카드 내용 입력 없을 경우
    if ($("#txt1").val() == "") {
      alert("카드자료를 입력하세요.");
      $("#txt1").focus();
      return;
    }
    // 생성된 카드가 있을 경우
    if ($(".box3").text() != "") {
      alert(
        "카드가 이미 생성이 되어 있습니다.\n 생성된 카드를 지우고 다시 생성합니다."
      );
      init();
    }
    // 숫자 or 숫자 목록 구분
    if ($("#txt1").val().indexOf(",") < 0) {
      // 숫자로
      createRandom();
    } else {
      // 숫자 목록으로
      createSplit();
    }
  });

  // 카드 클릭 시
  $(".box3").on("click", ".card", function (event) {
    count++;
    if (count > 3) {
      alert("이미 3개의 카드를 선택했습니다.");
      return;
    }
    $(this).css("background-color", "yellow");
    sum = sum + parseInt($(this).text());
    var str = $("#msg").text();
    str = str + $(this).text();
    if (count < 3) {
      str = str + " + ";
    } else {
      str = str + " = " + sum;
    }
    $("#msg").text(str);
  });

  // 정렬하기 클릭 시
  $("#bt2").click(function () {
    arr.sort(function (a, b) {
      return a - b;
    });
    init();
    createDiv();
  });

  // 지우기 클릭 시
  $("#bt3").click(function () {
    init();
    $("#txt1").val("");
  });
});
