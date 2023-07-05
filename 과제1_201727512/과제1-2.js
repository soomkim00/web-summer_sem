function show() {
    var str = '';
    str = '<h1>설문완료</h1>';
    str = str + '학년 : ' + hwform.r_grade.value + '<br>';
    str = str + '성별 : ' + hwform.r_gender.value + '<br>';
    str = str + '관심분야 : ' + hwform.sel_intr.value + '<br>';
    str = str + '진로(다중 선택) : ' + hwform.ch_cour_1.value + '<br>'; 
    // 체크박스 출력은 아직 안배워서.. 임의로 설정해놨는데 무조건 '개발'로 표시가 됩니다. 이유는 아직 모르겠습니다..
    str = str + '남기고 싶은 말 : ' + hwform.txt_etc.value;
    document.write(str);
}