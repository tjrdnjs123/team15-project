let timePicker = document.getElementById("time-picker"); // 타임피커 input창 가져오기
let deadWrap = document.getElementById("dead"); // taskList에 담긴 데드라인 (render.js에 위치)
const btnClose = document.getElementById("btnClose"); // X(창닫는 버튼)가져오기

/* X버튼 클릭시 타임피커 초기화 */
const resetTimePicker = () => {
  timePicker.value = "";
};
btnClose.addEventListener("click", resetTimePicker);

// 실시간 시간 구하기
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // 실시간 시
  const minutes = String(date.getMinutes()).padStart(2, "0"); // 실시간 분
  // 타임피커의 문자열 시간쪽만
  const pickerValueHour = timePicker.value.substr(0, 2).padStart(2, "0"); // 타임피커 시
  const pickerValueMinute = timePicker.value.substr(3, 5).padStart(2, "0"); // 타임피커 분

  // console.log("피커 시", timePicker.value.substr(0, 2));
  // console.log("피커 분", timePicker.value.substr(3, 5));
  // 절대값으로 시끼리, 분끼리의 결과를 출력
  const realTime = `${pickerValueHour - hours} 시간 ${
    pickerValueMinute - minutes
  } 분 남았습니다`;
  console.log(realTime);
}

addButton.addEventListener("click", getClock);
