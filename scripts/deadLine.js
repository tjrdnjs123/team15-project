let timePicker = document.getElementById("time-picker");
let deadWrap = document.getElementById("dead");
const btnClose = document.getElementById("btnClose");
timePicker.addEventListener("change", getTime);

function getTime() {
  return timePicker.value;
}

/* X버튼 클릭시 타임피커 초기화 */
const resetTimePicker = () => {
  timePicker.value = "";
};
btnClose.addEventListener("click", resetTimePicker);
