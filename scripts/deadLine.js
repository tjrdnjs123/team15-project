let timePicker = document.getElementById("time-picker");
let deadWrap = document.getElementById("dead");
timePicker.addEventListener("input", getTime);

function getTime() {
  if (timePicker.value === "") {
    deadWrap.classList.add("hide");
  } else {
    return timePicker.value;
  }
}

/*
step1. 시간설정 창에서 시간, 분을 입력할 수 있다. V
step2. 입력 후 제출을 클릭하면 '데드라인 00시00분 까지' 라는 문구가 task 하단에 표시된다
  2-1. 입력받은 값을 조회할 수 있어야 한다.
step3. 입력받은 시간을 값으로 저장해야한다.

의문1. 시간표시하는 API가 있을까?
아니면 단순히 input 2개로 구현해도 된다
시간알림api는 어떤 데이터를 받는가? -> 형석님이 알아보고 답을 주실거임
*/
