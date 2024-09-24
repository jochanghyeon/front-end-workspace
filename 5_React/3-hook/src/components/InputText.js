import { useState, useRef, useEffect } from "react";
/* */
const InputText = () => {
  const [text, setText] = useState(""); //빈칸처리
  const textRef = useRef(); // 적으면

  const write = (e) => {
    setText(e.target.value);
  };
  const complete = () => {
    alert(textRef.current.value); //위에 경고메시지
    // setText("");
    textRef.current.value = ""; // 벨류값 지우기
    // 포커싱 잡기
    textRef.current.focus(); // 포커싱 잡기
  };
  return (
    <>
      <input ref={textRef} onChange={write} value={text} />
      <button onClick={complete}>작성 완료 </button>
    </>
  );
};
export default InputText;
