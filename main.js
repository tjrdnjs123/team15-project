/* 모달창 확인 버튼을 누르면 할 일이 추가되거나 입력 안했을 시 경고창을 띄운다 */
// const addTask = (event) => {
//   console.log("할 일 추가 완료");
// };

// /* 할 일 수정 함수 */
// const editTask = (event) => {
//   console.log("할 일 수정 완료");
// };
// /* 할 일 삭제 함수 */
// const delTask = (event) => {
//   console.log("할 일 삭제 완료");
// };
// /* 할 일 체크 함수 */
// const completeTask = (event) => {
//   console.log("일을 다 했다.");
// };
/* 마이크 누르면 음성 인식이 시작된다 */
let recognition = new webkitSpeechRecognition();
recognition.lang = "ko-KR"; // 언어설정
let isComplete = false;

const inputTask = document.getElementById("input-task");

const record = () => {
  console.log("녹음시작");
  if (!isComplete) {
    recognition.start();
  } else {
  }
};

recognition.addEventListener("result", (event) => {
  console.log(event);

  const transcript = event.results[0][0].transcript;
  console.log(transcript);
  inputTask.value = transcript;
});
