$(document).ready(function () {
  $("#addbt").click(function () {
    var qaun = parseInt($("#txt_q").val());
    qaun++;
    $("#txt_q").val(qaun);
  });
  $("#reducebt").click(function () {
    var qaun = parseInt($("#txt_q").val());
    if (qaun == 0) return;
    qaun--;
    $("#txt_q").val(qaun);
  });
  $('#orderbt').click(function(){
    var result = 0;
    var menu = $('#sel_menu').val();
    switch (menu) {
      case '아메리카노':
        result = result + 2000;
        break;
      case '카푸치노':
        result = result + 3000;
        break;
      case '카페라떼':
        result = result + 3500;
        break;
    };
    var value = $('input[type=radio][name=r_size]:checked').val();
    if (value == 'Grande') {
      result = result + 500;
    }
    if (value == 'Venti') {
      result = result + 1000;
    }
    var q = $('#txt_q').val();
    result = result * q;
    var str = '';
    var sel1 = '';
    var sel2 = '';
    var sel3 = '';
    if($('input[type=checkbox][name=ch_sr]:checked').val()) {
      sel1 = $('input[type=checkbox][name=ch_sr]:checked').val();
    };
    if($('input[type=checkbox][name=ch_sh]:checked').val()) {
      sel2 = $('input[type=checkbox][name=ch_sh]:checked').val();
    };
    if($('input[type=checkbox][name=ch_ice]:checked').val()) {
      sel3 = $('input[type=checkbox][name=ch_ice]:checked').val();
    };
    // var sel1 = $('input[type=checkbox][name=ch_sr]:checked').val();
    // var sel2 = $('input[type=checkbox][name=ch_sh]:checked').val();
    // var sel3 = $('input[type=checkbox][name=ch_ice]:checked').val();
    str = str + menu + ' ' + value + '사이즈 ' + q + ' 잔은 총 ' + result + '원입니다.\n';
    str = str + '선택사항 : ' + sel1 + ' ' + sel2 + ' ' + sel3;
    alert(str);
  });
});
