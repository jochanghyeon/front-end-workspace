import React, { useState, useRef } from "react";
import "./reset.css";
import "./App.css";
import memoIcon from "./img/메모장.png";
import photoIcon from "./img/사진.png";
import stockIcon from "./img/주식.png";
import calendarIcon from "./img/캘린더.png";
import weatherIcon from "./img/날씨.png";
import trashIcon from "./img/휴지통.png";
import machineIcon from "./img/계산기.png";
import Machine from "./machine";
import Weather from "./weather"; // Weather 컴포넌트 추가
import useMain from "./main.js";
import "./weather.css";
import Calendar from "./calendar.js";
import "./calendar.css";
import calendarsmall from "./calendarsmall.js";

const App = () => {
  const [isMemoOpen, setMemoOpen] = useState(false);
  const [isMachineOpen, setMachineOpen] = useState(false);
  const [isWeatherOpen, setWeatherOpen] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);
  const [memoText, setMemoText] = useState(""); // 메모 텍스트 상태 추가

  const [dragging, setDragging] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const memoModalRef = useRef(null);
  const machineModalRef = useRef(null);
  const weatherModalRef = useRef(null);
  const calendarModalRef = useRef(null);

  const { startResize } = useMain(memoModalRef);

  const toggleMemo = () => setMemoOpen((prev) => !prev);
  const toggleMachine = () => setMachineOpen((prev) => !prev);
  const toggleWeather = () => setWeatherOpen((prev) => !prev);
  const toggleCalendar = () => setCalendarOpen((prev) => !prev);

  // 드래그 시작
  const handleMouseDown = (e, ref) => {
    setDragging(true);
    setCurrentModal(ref);
    setPosition({
      x: e.clientX - ref.current.getBoundingClientRect().left,
      y: e.clientY - ref.current.getBoundingClientRect().top,
    });
  };

  // 드래그 중
  const handleMouseMove = (e) => {
    if (dragging && currentModal) {
      currentModal.current.style.left = `${e.clientX - position.x}px`;
      currentModal.current.style.top = `${e.clientY - position.y}px`;
    }
  };

  // 드래그 종료
  const handleMouseUp = () => {
    setDragging(false);
    setCurrentModal(null);
  };

  return (
    <>
      <div id="root">
        <div
          className="main"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {isMemoOpen && (
            <div
              className="floating-window"
              ref={memoModalRef}
              style={{
                position: "absolute",
                left: "100px",
                top: "100px",
              }}
            >
              <div
                className="resizer nw"
                onMouseDown={(e) => startResize(e, e.target)}
              ></div>
              <div
                className="resizer ne"
                onMouseDown={(e) => startResize(e, e.target)}
              ></div>
              <div
                className="resizer sw"
                onMouseDown={(e) => startResize(e, e.target)}
              ></div>
              <div
                className="resizer se"
                onMouseDown={(e) => startResize(e, e.target)}
              ></div>
              <div
                className="window-header"
                onMouseDown={(e) => handleMouseDown(e, memoModalRef)}
              >
                <div className="window-title">메모장</div>
                <div className="window-controls">
                  <button
                    className="window-close"
                    onClick={toggleMemo}
                  ></button>
                </div>
              </div>
              <textarea
                placeholder="안녕~"
                value={memoText}
                onChange={(e) => setMemoText(e.target.value)}
                style={{
                  width: "100%",
                  height: "calc(100% - 30px)", // 헤더 높이를 고려한 동적 높이
                  border: "1px solid #ccc", // 보더 유지
                  outline: "none", // 아웃라인 유지
                  padding: "5px",
                  boxSizing: "border-box",
                  resize: "none", // 사용자가 크기를 조정할 수 없도록
                  overflowY: "auto", // 세로 스크롤바가 필요할 때 나타나도록
                }}
              ></textarea>
            </div>
          )}

          {isMachineOpen && (
            <div
              className="modal2"
              ref={machineModalRef}
              style={{
                position: "absolute",
                left: "150px",
                top: "150px",
              }}
            >
              <div className="modal_body2">
                <div
                  className="mheader"
                  onMouseDown={(e) => handleMouseDown(e, machineModalRef)}
                >
                  <button
                    className="window-close2"
                    onClick={toggleMachine}
                  ></button>
                </div>
                <Machine />
              </div>
            </div>
          )}

          {isWeatherOpen && (
            <div
              className="modal3"
              ref={weatherModalRef}
              style={{
                position: "absolute",
                width: "400px",
                height: "400px",
                left: "200px",
                top: "200px",
              }}
            >
              <Weather
                modalVisible={isWeatherOpen}
                handleCloseModal={toggleWeather}
              />
            </div>
          )}

          {isCalendarOpen && (
            <Calendar
              modalVisible={isCalendarOpen}
              handleCloseModal={toggleCalendar}
              ref={calendarModalRef}
              onMouseDown={(e) => handleMouseDown(e, calendarModalRef)}
            />
          )}
        </div>

        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.021)" }}>
          <div
            className="bottom"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.363)" }}
          >
            <div className="icon">
              <button className="btn-open-modal" onClick={toggleMemo}>
                <img src={memoIcon} alt="메모장" />
              </button>
            </div>
            <div className="icon">
              <button className="btn-open-modal">
                <img src={photoIcon} alt="사진" />
              </button>
            </div>
            <div className="icon">
              <button className="btn-open-modal">
                <img src={stockIcon} alt="주식" />
              </button>
            </div>
            <div className="icon">
              <button className="btn-open-modal" onClick={toggleCalendar}>
                <img src={calendarIcon} alt="캘린더" />
              </button>
            </div>
            <div className="icon">
              <button className="btn-open-modal" onClick={toggleWeather}>
                <img src={weatherIcon} alt="날씨" />
              </button>
            </div>
            <div className="icon">
              <button className="btn-open-modal">
                <img src={trashIcon} alt="휴지통" />
              </button>
            </div>
            <div className="icon">
              <button className="btn-open-modal" onClick={toggleMachine}>
                <img src={machineIcon} alt="계산기" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
