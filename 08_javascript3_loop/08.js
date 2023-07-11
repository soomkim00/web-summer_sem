function showDan() {
    document.getElementById('msg').classList.remove('rdan');
    if (!myform.sel_dan.value) {
        alert('단을 선택하세요.');
        myform.sel_dan.focus();
        return;
    }
    var i = myform.sel_dan.value;
    var str = '';
    for (var j = 1 ; j <= 9; j++) {
        str = str + i + ' x ' + j + ' = ' + i*j + '<br>';
        document.getElementById('msg').innerHTML = str;
    }
}
// 이미지 랜덤
function showRandom() {
    var str2 = '';
    var i = Math.floor(Math.random()*8)+2;
    var j = Math.floor(Math.random()*9)+1;
    var result = i*j;
    var r10 = Math.floor(result / 10);
    var r1 = result % 10;
    str2 = str2 + '<img src="./img/'+ i + '.png">' ;str2 = str2 + '<img src="./img/x.png">';
    str2 = str2 + '<img src="./img/'+ j + '.png">';
    str2 = str2 + '<img src="./img/equal.png">'
    if (r10 == 0) {
        str2 = str2 + '<img src="./img/blank.png">'
    }
    else {
        str2 = str2 + '<img src="./img/'+ r10 + '.png">'
    }
    str2 = str2 + '<img src="./img/'+ r1 + '.png">' + '<br>';
    document.getElementById('msg').innerHTML = str2;
}

// 기본 random
// function showRandom() {
//     var str2 = '';
//     var i = Math.floor(Math.random()*8)+2;
//     var j = Math.floor(Math.random()*9)+1;
//     str2 = str2 + i + 'x '  + j + ' = ' + i*j + '<br>';
//     document.getElementById('msg').className = "rdan";
//     document.getElementById('msg').innerHTML = str2;
// }
function showClear() {
    myform.reset();
    document.getElementById('msg').innerHTML = "";
}