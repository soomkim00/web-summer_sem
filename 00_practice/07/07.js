function show() {
  var num1 = parseInt(myform.txt1.value);
  var num2 = parseInt(myform.txt2.value);
  var op = myform.r_op.value;
  var ans;
  // 공백처리
  if (!num1) {
    alert("첫번째 숫자를 입력하세요.");
    myform.txt1.focus();
    return;
  }
  if (!num2) {
    alert("두번째 숫자를 입력하세요.");
    myform.txt2.focus();
    return;
  }
  if (!op) {
    alert("연산자를 선택하세요.");
    return;
  }
  //연산
  switch (op) {
    case "+":
      ans = num1 + num2;
      break;
    case "-":
      ans = num1 - num2;
      break;
    case "*":
      ans = num1 * num2;
      break;
    case "/":
      ans = num1 / num2;
      break;
  }
  //자료 출력
  var ck = myform.ck_eval.checked;
  if (ck) {
    document.getElementById("msg").innerHTML =
      num1 + op + num2 + " = " + ans.toFixed(2);
  } else {
    document.getElementById("msg").innerHTML = ans.toFixed(2);
  }
}
