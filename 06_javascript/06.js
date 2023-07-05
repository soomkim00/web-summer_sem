function show() {
  var str = "";
  str = "성명 : " + form06.txt_name.value + "<br>";
  str = str + "E-mail : " + form06.txt_email.value + "<br>";
  str =
    str +
    "생년월일 : " +
    form06.txt_year.value +
    "년" +
    form06.sel_mon.value +
    "월" +
    form06.txt_day.value +
    "일" +
    "<br>";
  str = str + "성별 : " + form06.r_gender.value + "<br>";
  str = str + "기타 : " + form06.txt_content.value;
  document.write(str);
}
