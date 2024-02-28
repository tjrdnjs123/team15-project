let recognition = new webkitSpeechRecognition();
recognition.lang = "ko-KR";
let inputTask = document.getElementById("inputTask");
const fakeBtn = document.getElementById("fakeBtn");
const micBtn = document.getElementById("micBtn");
const stopBtn = document.getElementById("stopBtn");
const btnClose = document.getElementById("btn-close");

/* 마이크버튼 클릭: 마이크 버튼사라짐 -> 녹음버튼나타남 */
fakeBtn.addEventListener("click", () => {
  fakeBtn.style.display = "none";
  micBtn.style.display = "block";
});

/* 녹음버튼 클릭: 녹음버튼 사라짐 -> 중지버튼 나타남 */
const record = (event) => {
  micBtn.style.display = "none"; // 녹음버튼 사라짐
  stopBtn.style.display = "block"; // 중지버튼 나타남

  recognition.start();
  console.log("녹음시작");
  inputTask.value = "";

  recognition.addEventListener("speechstart", () => {
    console.log("인식중");
  });
  recognition.addEventListener("speechend", () => {
    console.log("인식끝");
  });
  recognition.addEventListener("result", (event) => {
    console.log(event);
    const transcript = event.results[0][0].transcript; // 녹음값 접근
    console.log(transcript);
    inputTask.value = transcript; // 녹음값 input value로 반환
    if (inputTask.value) {
      fakeBtn.style.display = "block"; // 마이크버튼 나타남
      stopBtn.style.display = "none"; // 중단버튼 사라짐
    }
  });

  /* 녹음이 끝났을 때 입력창이 비어있으면 원상복귀 */
  recognition.addEventListener("end", () => {
    if (!inputTask.value) {
      fakeBtn.style.display = "block"; // 마이크버튼 나타남
      stopBtn.style.display = "none"; // 중단버튼 사라짐
    }
  });
};
/* 중지버튼 클릭시 녹음이 중지된다 */
stopBtn.addEventListener("click", () => {
  console.log("녹음중지");
  recognition.stop();
  //   recognition.abort(); 논의 후 결정
  stopBtn.style.display = "none"; // 중지버튼 사라짐
  fakeBtn.style.display = "block"; // 마이크버튼 나타남
});

btnClose.addEventListener("click", () => {
  inputTask.value = "";

  fakeBtn.style.display = "block";
  stopBtn.style.display = "none";
  micBtn.style.display = "none";
});
// 시나리오1. 3개의 버튼을 만들어 기능을 각각넣는다
// s1.1-1. 페이크이미지용 버튼을 만든다 V
// s1.1-2. CSS로 위에 겹치게 둔다 V
// s1.1-3. fakeBtn을 끌어온다 V
// s1.1-4. 클릭시 display:none처리 V
// s1.1-5. 스탑기능 구현 V
// s1.1-6. 녹음의 상태가 끝나도 마이크로 돌아와야한다 V
// s1.1-7. input값이 제출될 때 동시에 초기값설정. X버튼 클릭시는 그냥 초기값
// s1.1-8. 하나의 함수 안에 동작하게끔하여 음성이 기록되면 input창을 제외하고 모두 초기화되어야한다

// 해결할 오류1. 모달내 상태를 변경하고 제출, X버튼 누르고 다시 addtask버튼을 클릭하면 초기화 되지않았다.

// s2.1.1. 버튼클릭시 이미지가 사라진다 -> 그자리에 새로운 이미지를 생성한다
