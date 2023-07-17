var num = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var flag = false;
var cnt = 0;

function shuffle() {
  num = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var idx1 = Math.floor(Math.random() * 9);
  num[idx1] = 1;
  console.log(num);
}
$(document).ready(function () {
  $("#btn1").click(function () {
    shuffle();
    for (var i = 1; i <= num.length; i++) {
      var htmlStr = "<img class='imgBox' src='./img/q.png' id='img" + i + "'>";
      $("#div" + i).html(htmlStr);
    }
    $('#msg').text('');
    flag = false;
    cnt = 0;
  });
  $(".box1").on("click", ".imgBox", function (event) {
    if(flag == true) return;

    var id = $(this).attr("id");
    var idx = parseInt(id.substr(id.length - 1)) - 1;

    if ($(this).attr('src') == './img/q.png') {
      if (num[idx] == 0) {
        $(this).attr('src', './img/hart.png');
        cnt++;
        if (cnt == 8) {
          $('#msg').text('성공');
          $('.imgBox').attr('src', './img/hart.png');
          flag = true;
        };
      }
      else {
        $(this).attr('src', './img/boom.png');
        $('#msg').text('실패');
        flag = true;
      }
    };
  });
});
