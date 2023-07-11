function show() {
  if (!myform.txt1.value) {
    alert("시작값을 입력하세요");
    myform.txt1.focus();
    return;
  }
  if (!myform.txt2.value) {
    alert("종료값을 입력하세요");
    myform.txt2.focus();
    return;
  }
  var num1 = parseInt(myform.txt2.value);
  var num2 = parseInt(myform.txt1.value);
  var str = "";
  var cnt = 0;
  if (num1 > num2) {
    var temp = 0;
    temp = num1;
    num1 = num2;
    num2 = temp;
  }

  for (var i = num1; i <= num2; i++) {
    if (i % 2 == 1) {
      str = str + "<div class='card2'>" + i + "</div>";
    } else {
      str = str + "<div class='card1'>" + i + "</div>";
    }
    cnt++;
    if (cnt % 5 == 0) {
      str = str + "<div class='newline'>" + "" + "</div>";
    }
  }
  document.getElementById("msg").innerHTML = str;
}

function showClear() {
  myform.reset();
  document.getElementById("msg").innerHTML = "";
}
