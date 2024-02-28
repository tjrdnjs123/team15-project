/* 마이크 누르면 음성 인식이 시작된다 */
let recognition = new webkitSpeechRecognition();
recognition.lang = "ko-KR";
const inputTask = document.getElementById("input-task");
const fakeBtn = document.getElementById("fakeBtn");
const stopBtn = document.getElementById("stopBtn");

// 마이크버튼 클릭시
fakeBtn.addEventListener("click", () => {
  fakeBtn.style.display = "none"; // 마이크버튼 사라짐
  micBtn.style.display = "block"; // 녹음버튼 나타남
});
// 녹음버튼 클릭시
const record = (event) => {
  micBtn.style.display = "none"; // 녹음버튼 사라짐
  stopBtn.style.display = "block"; // 중지버튼 나타남
  // 녹음시작
  console.log("녹음시작");
  recognition.start();
  // 녹음값 접근
  recognition.addEventListener("result", (event) => {
    console.log(event);
    // 녹음값 input value로 넣기
    const transcript = event.results[0][0].transcript;
    console.log(transcript);
    inputTask.value = transcript;
  });
};

// step1. 마이크버튼을 클릭하면 -> 버튼이 사라진다
// s1.1-1. 페이크이미지용 버튼을 만든다 V
// s1.1-2. CSS로 위에 겹치게 둔다 V
// s1.1-3. fakeBtn을 끌어온다 V
// s1.1-4. 클릭시 display:none처리 V
// s1.1-5.

// s2.1.1. 버튼클릭시 이미지가 사라진다 -> 그자리에 새로운 이미지를 생성한다
