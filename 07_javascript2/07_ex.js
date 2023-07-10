function show(n) {
  var str = document.getElementById("msg").innerHTML;
  str = str + n;
  document.getElementById("msg").innerHTML = str;
}
function calShow() {
  str = document.getElementById("msg").innerHTML;
  document.getElementById("msg").innerHTML = eval(str);
}
function clearShow() {
  document.getElementById("msg").innerHTML = "";
}
function clearLast() {
  str = document.getElementById("msg").innerHTML;
  document.getElementById("msg").innerHTML = str.substr([0], [str.length - 1]);
}
