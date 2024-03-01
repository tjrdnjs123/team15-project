let timePicker = document.getElementById("time-picker");
let deadWrap = document.getElementById("dead");
const btnClose = document.getElementById("btnClose");
timePicker.addEventListener("change", getTime);

function getTime() {
  if (timePicker.value === "") {
    deadWrap.classList.add("hide");
  } else {
    return timePicker.value;
  }
}
/* X버튼 클릭시 타임피커 초기화 */
const resetTimePicker = () => {
  timePicker.value = "";
};
document.querySelector(".btn-close").addEventListener("click", resetTimePicker);
