import InputText from "./InputText";
import Btn from "./Btn";
import { useState, useEffect, useRef } from "react";

const Converter = () => {
  const [text, setText] = useState("Minute => hour"); //기본값을여기에넣음{test}
  const [bool, setBool] = useState(false); //boolean값;
  const [number, setNumber] = useState(""); //number값;
  const invert = () => {
    setBool(!bool);
    reset();
  };
  // 불리언 값을 넣었다고 바로바뀌는게 아니라 useEffect를 사용한뒤 바뀜
  useEffect(() => {
    if (bool) {
      setText("Hours => Minutes");
    } else {
      setText("Minutes => Hours");
    }
  }, [bool]);

  const change = (e) => {
    // 넘버 값 바꾸는거 change
    setNumber(e.target.value);
  };

  const reset = () => {
    setNumber("");
  };

  return (
    <>
      <h1>Time Converter</h1>
      <p>
        Minutes :{" "}
        <input
          type="number"
          placeholder="Minutes"
          disabled={bool}
          onChange={change}
          value={bool ? number * 60 : number}
        />
      </p>
      <p>
        Hours :{" "}
        <input
          type="number"
          placeholder="Hours"
          disabled={!bool}
          value={bool ? number : Math.floor(number / 60)}
          onChange={change}
        />
      </p>
      <Btn click={reset} text="Reset" />
      <Btn click={invert} text={text} />
    </>
  );
};
export default Converter;
