/* 
로컬스토리지의 값을 모두 삭제하고, 화면에 렌더링하는 taskReset함수.
새로고침 버튼을 클릭하면 할일을 삭제하겠다는 알림창이 나오고, 선택여부에 따라 삭제 및 취소가 가능하다.
*/
const taskReset = () => {
  console.log(`새로고침클릭`);
  const confirmMessage = confirm(`모든 할 일을 삭제하시겠습니까?`); // 안내메세지 출력
  if (confirmMessage) {
    localStorage.clear(); // 메세지의 "확인"을 클릭하면 삭제진행
    console.log(`전체삭제 실행`);
  } else {
    console.log(`전체삭제 취소`);
  }
  render();
};
